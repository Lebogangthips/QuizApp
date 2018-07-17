import { Component } from '@angular/core';

/**
 * Generated class for the Level1Component component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'level1',
  templateUrl: 'level1.html'
})
export class Level1Component {

  text: string;

  constructor() {
    console.log('Hello Level1Component Component');
    this.text = 'Hello World';
  }

}
