import {Component, Input, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';
import {MatDialog} from '@angular/material';
import {UserModalComponent} from '../user-modal/user-modal.component';

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

  constructor(private userService: UserService, public dialog: MatDialog) {
  }

  ngOnInit() {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(UserModalComponent, {
      width: '250px',
      data: {user: this.user}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.user = result;
    });
  }

  save() {
    if (!!this.password && this.password === this.confirmPassword) {
      this.user.password = this.password;
      this.userService.addUser(this.user).then(user => this.user = user);
    }
    this.password = '';
    this.confirmPassword = '';
  }
}
