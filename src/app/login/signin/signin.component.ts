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
  error = '';
  option: LoginOptions = {
    scope: 'email,public_profile',
    return_scopes: true,
    enable_profile_selector: false
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
      .then((response: LoginResponse) => {
        console.log(response);
        this.fb.api(`/${response.authResponse.userID}`, 'get', {}).then(response => console.log(response))
      })
      .catch((error: any) => console.error(error));
  }
}
