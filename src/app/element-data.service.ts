import { Injectable } from '@angular/core';

@Injectable()
export class ElementDataService {
  elementItems: any = {};

  constructor() {
    this.elementItems = {
      'item-1': {
        position: {
          left: 500,
          top: 50,
        },
        title: 'First Item',
        children: ['item-2', 'item-3'],
      },
      'item-2': {
        position: {
          left: 200,
          top: 400,
        },
        title: 'Second Item',
        children: [],
      },
      'item-3': {
        position: {
          left: 500,
          top: 400,
        },
        title: 'Third Item',
        children: ['item-4'],
      },
      'item-4': {
        position: {
          left: 800,
          top: 400,
        },
        title: 'Forth Item',
        children: [],
      },
    };
  }

}
