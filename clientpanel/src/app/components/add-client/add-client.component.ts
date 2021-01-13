import { Component, OnInit } from '@angular/core';
import { Client } from '../../modules/Client';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.scss']
})
export class AddClientComponent implements OnInit {

  client: Client = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    balance: 0
  }

  disableBalanceOnAdd: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(any: any){

  }

}
