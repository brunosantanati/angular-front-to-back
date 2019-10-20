import { Component } from '@angular/core';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    //template: '<h2>Bruno Sant Ana</h2>',
    styleUrls: ['./user.component.css'],
    styles: [`
        h2{
            font-family: verdana;
        }
    `]
})

export class UserComponent {
  // Properties
  firstName = 'Bruno';
  lastName = 'Sant\' Ana';
  age = 32;
  address = {
    street: '50 Main st',
    city: 'Boston',
    state: 'MA'
  };

  // Methods
  constructor() {
    
  }

  showAge() {
    return this.age + 2;
  }


}