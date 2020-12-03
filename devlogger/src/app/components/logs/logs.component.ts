import { Component, OnInit } from '@angular/core';
import { LogService } from '../../services/log.service';
import { Log } from '../../models/Log'

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.scss']
})
export class LogsComponent implements OnInit {

  logs: Log[];

  constructor(private logService: LogService) { }

  ngOnInit(): void {
    this.logs = this.logService.getLogs();
  }

}
