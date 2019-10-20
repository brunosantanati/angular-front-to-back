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
  firstName = 'John';
  lastName = 'Doe';
  age = 30;

  // Methods
  constructor() {
    this.sayHello();
    console.log(this.age);
    this.hasBirthday();
    console.log(this.age);
  }

  sayHello() {
    console.log(`Hello ${this.firstName}`);
  }

  hasBirthday() {
    this.age += 1;
  }

}