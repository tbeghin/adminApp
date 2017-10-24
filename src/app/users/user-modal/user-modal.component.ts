import {Component, Inject} from '@angular/core';
import {UserService} from '../../services/user.service';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-user-modal',
  templateUrl: './user-modal.component.html',
  styleUrls: ['./user-modal.component.css']
})
export class UserModalComponent {
  password;
  confirmPassword;

  constructor(private userService: UserService,
              public dialogRef: MatDialogRef<UserModalComponent>,
              @Inject(MAT_DIALOG_DATA) public user: any) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  save() {
    if (!!this.password && this.password === this.confirmPassword) {
      this.user.password = this.password;
      if (this.user._id) {
        this.userService.updateUser(this.user).then(user => this.user = user);
      } else {
        this.userService.addUser(this.user).then(user => this.user = user);
      }
    }
    this.password = '';
    this.confirmPassword = '';
    this.dialogRef.close();
  }
}
