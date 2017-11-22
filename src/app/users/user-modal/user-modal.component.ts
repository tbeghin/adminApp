import {Component, Inject, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';
import {FormControl} from '@angular/forms';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {User} from '../../models/user';

@Component({
  selector: 'app-user-modal',
  templateUrl: './user-modal.component.html',
  styleUrls: ['./user-modal.component.css']
})
export class UserModalComponent implements OnInit{
  firstname: FormControl;
  lastname: FormControl;
  job: FormControl;
  role: FormControl;
  username: FormControl;
  password: FormControl;
  confirmPassword: FormControl;

  constructor(private userService: UserService,
              public dialogRef: MatDialogRef<UserModalComponent>,
              @Inject(MAT_DIALOG_DATA) public user: User) {
  }

  ngOnInit(){
    this.firstname = new FormControl(this.user.firstname);
    this.lastname = new FormControl(this.user.lastname);
    this.job = new FormControl(this.user.job);
    this.role = new FormControl(this.user.role);
    this.username = new FormControl(this.user.username);
    this.password = new FormControl('');
    this.confirmPassword = new FormControl('');
  }

  onNoClick(): void {
    this.dialogRef.close(false);
  }

  save() {
    if (!!this.password && this.password === this.confirmPassword) {
      this.user.password = this.password;
      if (this.user._id) {
        this.userService.updateUser(this.user).then(user => this.user = user);
      } else {
        this.userService.addUser(this.user).then(user => this.user = user);
      }
      this.dialogRef.close(this.user);
    } else {
      console.log('ICI');
      this.invalidPassword = true;
    }
    this.password = '';
    this.confirmPassword = '';
  }
}
