import { Component, OnInit } from '@angular/core';
import { UserService } from './app.service'
import { Observable } from 'rxjs/Rx'

const templateUrl = require('./app.component.html');

@Component({
  selector: 'pond-app',
  providers: [UserService],
  templateUrl: templateUrl
})
export class AppComponent implements OnInit {
  users: User[];

  constructor(private userService: UserService) {

  }

  ngOnInit() {
    let timer = Observable.timer(0, 5000)
    timer.subscribe(
      () => this.getUser()
    );
  }

  getUser() {
    console.log('fetch user !!');
    this.userService.getUsers().subscribe(users => {
      this.users = users;
    });
  }

}

interface User {
  id: number;
  name: string;
}