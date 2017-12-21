import {Component, Inject, Output, OnInit, EventEmitter} from '@angular/core';
import {UserService} from '../../services/user.service';
import {FormControl, Validators} from '@angular/forms';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {User} from '../../models/user';

@Component({
  selector: 'app-user-modal',
  templateUrl: './user-modal.component.html',
  styleUrls: ['./user-modal.component.css']
})
export class UserModalComponent implements OnInit {
  @Output() onCreate: EventEmitter<any> = new EventEmitter();
  firstName: FormControl;
  lastName: FormControl;
  job: FormControl;
  role: FormControl;
  username: FormControl;
  password: FormControl;
  confirmPassword: FormControl;

  constructor(private userService: UserService,
              public dialogRef: MatDialogRef<UserModalComponent>,
              @Inject(MAT_DIALOG_DATA) public user: User) {
  }

  ngOnInit() {
    this.firstName = new FormControl(this.user.first_name);
    this.lastName = new FormControl(this.user.last_name);
    this.job = new FormControl(this.user.job);
    this.role = new FormControl(this.user.role);
    this.username = new FormControl(this.user.username);
    this.password = new FormControl('', [Validators.required]);
    this.confirmPassword = new FormControl('', [Validators.required]);
  }

  onSubmit(): void {
    this.save();
  }

  onNoClick(): void {
    this.dialogRef.close(false);
  }

  save() {
    if (this.password.valid && this.password.value === this.confirmPassword.value) {
      this.user.username = this.username.value;
      this.user.first_name = this.firstName.value;
      this.user.last_name = this.lastName.value;
      this.user.job = this.job.value;
      this.user.role = this.role.value;
      this.user.password = this.password.value;
      if (this.user._id) {
        this.userService.updateUser(this.user).then(user => this.dialogRef.close(user));
      } else {
        this.userService.addUser(this.user).then(user => {
          this.dialogRef.close(user);
          this.onCreate.emit();
        });
      }
    }
    this.password.reset();
    this.confirmPassword.reset();
  }
}
