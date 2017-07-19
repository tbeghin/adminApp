import { Component, OnInit } from '@angular/core';

import {UserService} from '../services/user.service';

import {User} from '../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUser(3)
      .then(data => this.user = data);
  }
}
