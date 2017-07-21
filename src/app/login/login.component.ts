import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
    private authService: AuthService) {
  }

  ngOnInit() {
    // reset login status
    this.authService.logout();
  }

  loading = false;
  error = '';

  login(form: any) {
    this.loading = true;
    let username = form.username;
    let password = form.password;
    this.authService.login(username, password)
      .subscribe(result => {
        if (result === true) {
          // login successful
          this.router.navigate(['/']);
        } else {
          // login failed
          this.error = 'Username or password is incorrect';
          this.loading = false;
        }
      });
  }
}
