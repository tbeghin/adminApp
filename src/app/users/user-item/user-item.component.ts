import {Component, Input, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {UserService} from '../../services/user.service';
import {UserModalComponent} from '../user-modal/user-modal.component';
import {User} from '../../models/user';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {
  @Input() user: User;

  constructor(private userService: UserService,
              public dialog: MatDialog) {
  }

  ngOnInit() {
  }

  openDialog(): void {
    let newUser: User = {...this.user};
    const dialogRef = this.dialog.open(UserModalComponent, {
      width: '500px',
      data: newUser
    });

    dialogRef.afterClosed().subscribe(result => {
      if (!!result) {
        this.user = result;
      }
    });
  }

  delete() {
    this.userService.deleteUser(this.user._id).then(() => this.user = new User());
  }
}
