import { Component, OnInit } from '@angular/core';
import { ElementDataService } from './element-data.service';
import { Subscription } from 'rxjs/Subscription';
import { _ } from 'underscore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  elementItems: any = {};
  elementItemArray: any[] = [];
  elementUIDs: string[] = [];
  newItemSubscription: Subscription;

  constructor(private elementDataService: ElementDataService) {
    this.elementItems = elementDataService.getElementItems();
    this.elementUIDs = _.keys(this.elementItems);
    this.elementUIDs.forEach(uid => {
      const elementObj = this.elementItems[uid];
      this.elementItemArray.push(elementObj);
    });

    this.newItemSubscription = elementDataService.elementAddedSource$.subscribe(obj => {
      this.addNewElement(obj);
    });
  }

  ngOnInit() {
    const self: any = this;
    jsPlumb.ready(function() {
      jsPlumb.setContainer('diagramContainer');

      self.elementUIDs.forEach(uid => {
        self.setupDraggableAndEndpoint(uid);
        self.setupConnect(uid);
      });
    });
  }

  setupDraggableAndEndpoint(uid: string) {
    jsPlumb.draggable(uid);
    jsPlumb.addEndpoint(uid, {uuid: uid + 'Endpoint'}, {
      anchors: ['Bottom', 'Top'],
      maxConnections: -1,
      isSource: true,
      isTarget: true,
      connector: ['Straight'],
    });
  }

  addNewElement(newElementObj) {
    const self = this;
    this.elementItems = this.elementDataService.getElementItems();
    this.elementItemArray.push(this.elementItems[newElementObj.uid]);

    setTimeout(() => {
      self.setupDraggableAndEndpoint(newElementObj.uid);
      this.setupConnect(newElementObj.parentUID);
    });
  }

  setupConnect(uid: string) {
    const self: any = this;
    this.elementItems[uid].children.forEach(childUID => {
      jsPlumb.connect({
        source: uid,
        target: childUID,
        anchor: ['Bottom', 'Top'],
        connector: ['Straight'],
      });
      self.setupConnect(childUID);
    });
  }
}
