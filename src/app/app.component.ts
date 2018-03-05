import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ELEMENT_ITEMS: any[] = [
    {
      uid: 'item-1',
      position: {
        left: 500,
        top: 50
      },
      title: 'First Item'
    },
    {
      uid: 'item-2',
      position: {
        left: 200,
        top: 400
      },
      title: 'Second Item'
    },
    {
      uid: 'item-3',
      position: {
        left: 500,
        top: 400
      },
      title: 'Second Item'
    },
    {
      uid: 'item-4',
      position: {
        left: 800,
        top: 400
      },
      title: 'Second Item'
    }
  ];

  ngOnInit() {
    jsPlumb.ready(function() {
      jsPlumb.setContainer('diagramContainer');
      const common: any = {
        isSource: true,
        isTarget: true,
      };
      jsPlumb.addEndpoint('item-1', {
        anchors: ['Bottom']
      }, common);
      jsPlumb.addEndpoint('item-2', {
        anchor: 'Top'
      }, common);
      jsPlumb.addEndpoint('item-3', {
        anchor: 'Top'
      }, common);
      jsPlumb.addEndpoint('item-4', {
        anchor: 'Top'
      }, common);

      jsPlumb.connect({
          source: 'item-1',
          target: 'item-2',
          anchor: ['Bottom', 'Top'],
          connector: ['Straight'],
      });

      jsPlumb.connect({
          source: 'item-1',
          target: 'item-3',
          anchor: ['Bottom', 'Top'],
          connector: ['Straight'],
      });

      jsPlumb.connect({
          source: 'item-1',
          target: 'item-4',
          anchor: ['Bottom', 'Top'],
          connector: ['Straight'],
      });

      jsPlumb.draggable('item-1');
      jsPlumb.draggable('item-2');
      jsPlumb.draggable('item-3');
      jsPlumb.draggable('item-4');
    });
  }
}
