import {Component, OnInit} from '@angular/core';
import {UserService} from '../services/user.service';

import {User} from '../models/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: Array<User>;
  newUser: User;
  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.newUser = new User();
    this.userService.getAllUser().then(users => this.users = users);
  }
}
