import {Component, Input, Output, OnInit, EventEmitter} from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material';
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
  @Output() onDelete: EventEmitter<any> = new EventEmitter();

  constructor(private userService: UserService,
              public dialog: MatDialog) {
  }

  ngOnInit() {
  }

  openDialog(): void {
    const dialogConfig = {
      width: '500px',
      data: this.user
    };

    const dialogRef = this.dialog.open(UserModalComponent, dialogConfig as MatDialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      if (!!result) {
        this.user = result;
      }
    });
  }

  deleteUser() {
    this.userService.deleteUser(this.user._id).subscribe(() => this.onDelete.emit());
  }
}
