import {Component, OnInit} from '@angular/core';

import {UserService} from '../services/user.service';

@Component({
  selector: 'app-main-sidebar',
  templateUrl: './main-sidebar.component.html',
  styleUrls: ['./main-sidebar.component.css']
})
export class MainSidebarComponent implements OnInit {
  currentUser;
  user;
  active;
  listItem: Array<any>;

  constructor(private userService: UserService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.user = {username: 'Visiteur', lastname: '', job: ''};
    this.active = {
      isDashboard: true,
      isParameters: false
    };
  }

  ngOnInit() {
    this.userService.getUser(this.currentUser.id).then(user => this.user = user);
  }
}
