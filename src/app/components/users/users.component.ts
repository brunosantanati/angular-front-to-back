import { Component, OnInit } from '@angular/core';

import { User } from '../../models/User'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: User[];
  showExtended: boolean = true;
  loaded: boolean = false;
  enableAdd: boolean = true;

  constructor() { }

  ngOnInit() {

    setTimeout(() => {
      this.users = [
        {
          firstName: 'Bruno',
          lastName: 'Sant\' Ana',
          age: 33,
          address: {
              street: '50 Main st',
              city: 'Boston',
              state: 'MA'
          },
          image: 'http://lorempixel.com/600/600/people/3'
        },
        {
          firstName: 'Kevin',
          lastName: 'Johnson',
          age: 34,
          address: {
              street: '20 School st',
              city: 'Lynn',
              state: 'MA'
          },
          image: 'http://lorempixel.com/600/600/people/2'
        },
        {
          firstName: 'Karen',
          lastName: 'Williams',
          age: 26,
          address: {
              street: '55 Mill st',
              city: 'Miami',
              state: 'FL'
          },
          image: 'http://lorempixel.com/600/600/people/1'
        }
      ];

      this.loaded = true;

      //this.showExtended = false;

      // this.addUser({
      //   firstName: 'David',
      //   lastName: 'Jackson'
      // });
    }, 2000);
  }

  addUser(user: User){
    this.users.push(user)
  }

}
