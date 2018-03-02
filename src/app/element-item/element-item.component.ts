import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-element-item',
  templateUrl: './element-item.component.html',
  styleUrls: ['./element-item.component.css']
})
export class ElementItemComponent implements OnInit {
  @Input() elementData: any;
  @ViewChild("elementItem") elementItem: ElementRef;

  position: any = {
    left: 0,
    top: 0
  }
  uid: string = '';
  title: string = '';

  constructor() { }

  ngOnInit() {
    this.position = this.elementData.position;
    this.uid = this.elementData.uid;
    this.title = this.elementData.title;
    this.elementItem.nativeElement.style.left = this.elementData.position.left + 'px';
    this.elementItem.nativeElement.style.top = this.elementData.position.top + 'px';
  }

}
