import { Component } from '@angular/core';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})

export class UserComponent {
  // Properties
    user: {
        firstName: string,
        lastName: string,
        age: number,
        address: {
            street: string,
            city: string,
            state: string
        }
    }

  // Methods
  constructor() {
    this.user = {
        firstName: 'Bruno',
        lastName: 'Sant\' Ana',
        age: 33,
        address: {
            street: '50 Main st',
            city: 'Boston',
            state: 'MA'
        }
    }
  }
}