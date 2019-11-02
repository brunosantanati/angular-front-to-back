import { Injectable } from '@angular/core';
import { User } from '../models/User'
import { Observable } from 'rxjs'
import { of } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  users: User[];
  data: Observable<any>;

  constructor() {
    this.users = [
      {
        firstName: 'Bruno',
        lastName: 'Sant\' Ana',
        email: 'bruno@gmail.com',
        isActive: true,
        registered: new Date('01/02/2018 08:30:00'),
        hide: true
      },
      {
        firstName: 'Kevin',
        lastName: 'Johnson',
        email: 'kevin@gmail.com',
        isActive: false,
        registered: new Date('03/11/2017 06:20:00'),
        hide: true
      },
      {
        firstName: 'Karen',
        lastName: 'Williams',
        email: 'karen@gmail.com',
        isActive: true,
        registered: new Date('11/02/2016 10:30:00'),
        hide: true
      }
    ];
  }

  getData(){
    this.data = new Observable(observer => {
      setTimeout(() => {
        observer.next(1);
      }, 2000);

      setTimeout(() => {
        observer.next(2);
      }, 2000);

      setTimeout(() => {
        observer.next(3);
      }, 2000);

      setTimeout(() => {
        observer.next({name: 'Brad'});
      }, 2000);
    });

    return this.data;
  }
 
  getUsers(): Observable<User[]>{
    return of(this.users);
  }

  addUser(user: User){
    this.users.unshift(user);
  }
}
