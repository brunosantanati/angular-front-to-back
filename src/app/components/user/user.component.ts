import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User'

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {
  // Properties
    user: User

  // Methods
  constructor() {
  }
  
  ngOnInit(){
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