import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
        top: 300
      },
      title: 'Second Item'
    }
  ]

  ngOnInit(){
        jsPlumb.ready(function() {
            jsPlumb.setContainer("diagramContainer");
            let common: any = {
              isSource: true,
              isTarget: true,
            };
            
            jsPlumb.addEndpoint("item-1", { 
              anchors:["Bottom"]
            }, common); 
            
            jsPlumb.addEndpoint("item-2", { 
              anchor:"Top"
            }, common);

            jsPlumb.draggable('item-1');
            jsPlumb.draggable('item-2');
        });
  }
}
