import {Component, OnInit} from '@angular/core';
import {User} from '../../models/user';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.css']
})
export class UserPanelComponent implements OnInit {
  user: User = new User();
  userId: string;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userId = localStorage.getItem('currentUser');
    this.userService.loadActualUser();
    this.userService.actualUser.subscribe(user => this.user = user);
  }

}
