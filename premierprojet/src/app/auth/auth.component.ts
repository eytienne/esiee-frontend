import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(public appService: AppService) { }

  ngOnInit(): void {
  }

  onConnection() {
    this.appService.auth = !this.appService.auth;
  }

}
