import {Component, Input, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {
  @Input() user: any;
  password: string;
  confirmPassword: string;
  isEditable: boolean;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
  }

  save() {
    if (this.password == this.confirmPassword) {
      this.user.password = this.password;
      this.userService.addUser(this.user).then(user => this.user = user);
      this.editItem();
    }
    this.password = "";
    this.confirmPassword = "";
  }

  editItem() {
    this.isEditable = !this.isEditable;
  }
}
