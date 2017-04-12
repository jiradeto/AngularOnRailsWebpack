import { Component } from '@angular/core';
import { UserService } from './app.service'

@Component({
  selector: 'pond-app',
  providers: [UserService],
  template: `
  <h1> User  </h1>
    <div *ngFor="let user of users">
    <p>ID: {{user.id}}, name: {{user.name}}</p>
  </div>
  
  `
})
export class AppComponent {
  users: User[];

  constructor(private userService: UserService) {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
    });
  }
  
}


interface User {
  id: number;
  name: string;
}