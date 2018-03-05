import { Component, OnInit } from '@angular/core';
import { ElementDataService } from './element-data.service';
import { _ } from 'underscore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  elementItemArray: any[] = [];
  elementUIDs: string[] = [];

  constructor(public elementDataService: ElementDataService) {
    this.elementUIDs = _.keys(elementDataService.elementItems);
    this.elementUIDs.forEach(uid => {
      const elementObj = elementDataService.elementItems[uid];
      elementObj.uid = uid;
      this.elementItemArray.push(elementObj);
    });
  }

  ngOnInit() {
    const self: any = this;
    jsPlumb.ready(function() {
      jsPlumb.setContainer('diagramContainer');

      self.elementUIDs.forEach(uid => {
        jsPlumb.draggable(uid);
        jsPlumb.addEndpoint(uid, {uuid: uid + 'Endpoint'}, {
          anchors: ['Bottom', 'Top'],
          maxConnections: -1,
          isSource: true,
          isTarget: true,
        });
        self.setupConnect(uid);
      });
    });
  }

  setupConnect(uid: string) {
    const self: any = this;
    this.elementDataService.elementItems[uid].children.forEach(childUID => {
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
