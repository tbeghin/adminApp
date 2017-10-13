import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {AuthService} from '../../services/auth.service';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  loading = false;
  error = '';
  forgetPassword = false;

  constructor(private router: Router,
              private authService: AuthService) {
  }

  ngOnInit() {
    // reset login status
    this.authService.logout();
  }

  login(form: any) {
    this.loading = true;
    const username = form.username;
    const password = form.password;
    this.authService.login(username, password)
      .subscribe(
        result => {
          if (result === true) {
            // login successful
            this.router.navigate(['/']);
          } else {
            // login failed
            this.error = 'Indentifiant ou mot de passe incorrect';
            this.loading = false;
          }
        }
      );
  }
}
