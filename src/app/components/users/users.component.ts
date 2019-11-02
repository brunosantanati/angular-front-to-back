import { Component, OnInit, ViewChild } from '@angular/core';

import { User } from '../../models/User'
import { DataService } from '../../services/data.service'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  user: User = {
    firstName: '',
    lastName: '',
    email: ''
  };
  users: User[];
  showExtended: boolean = true;
  loaded: boolean = false;
  enableAdd: boolean = false;
  showUserForm: boolean = false;
  @ViewChild('userForm', {static: false}) form: any;

  constructor(private dataService: DataService) { }

  ngOnInit() {

    this.users = this.dataService.getUsers()

    this.loaded = true;
  }

  onSubmit({value, valid}: {value: User, valid: boolean}){
    if(!valid){
      console.log('Form s not valid')
    }else{
      value.isActive = true;
      value.registered = new Date();
      value.hide  = true;
      
      this.dataService.addUser(value);

      this.form.reset();
    }
  }

}
