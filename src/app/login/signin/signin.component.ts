import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FacebookService, LoginResponse, LoginOptions} from 'ngx-facebook';
import {AuthService} from '../../services/auth.service';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  loading = false;
  option: LoginOptions = {
    scope: 'email,public_profile',
    return_scopes: true,
    enable_profile_selector: false
  };
  fields: any = {
    fields: 'id,first_name,last_name,email,picture,gender,age_range'
  };

  constructor(private router: Router,
              private authService: AuthService,
              private fb: FacebookService) {
  }

  ngOnInit() {
    // reset login status
    this.authService.logout();
  }

  loginWithFacebook(): void {
    this.fb.login(this.option)
      .then(
        (response: LoginResponse) => {
          localStorage.setItem('accessToken', JSON.stringify({id: response.authResponse.userID, token: response.authResponse.accessToken}));
          this.fb.api(`/${response.authResponse.userID}`, 'get', this.fields)
            .then(
              response => console.log(response),
              error => console.error(error))
        })
      .catch((error: any) => console.error(error));
  }
}
