import { Injectable } from '@angular/core';
import * as utils from './utils';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ElementDataService {
  // Observable any sources
  private elementAddedSource = new Subject<any>();

  elementAddedSource$ = this.elementAddedSource.asObservable();

  elementItems: any = {};

  constructor() {
    this.elementItems = {
      'item-1': {
        uid: 'item-1',
        position: {
          left: 500,
          top: 50,
        },
        title: 'First Item',
        children: [],
      },
    };
  }

  getElementItems() {
    return this.elementItems;
  }

  addNewElement(parentUID) {
    const newItemUID = utils.uniqueID('item');
    this.elementItems[newItemUID] = {
      uid: newItemUID,
      position: {
        left: 1000,
        top: 400,
      },
      title: 'New Item',
      children: [],
    };

    if (this.elementItems[parentUID]) {
      this.elementItems[parentUID].children.push(newItemUID);
    }

    this.elementAddedSource.next({
      parentUID: parentUID,
      uid: newItemUID
    });
  }
}
