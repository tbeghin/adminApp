import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {User} from '../../models/user';
import {FacebookService, LoginResponse} from 'ngx-facebook';
import {UserService} from '../../services/user.service';
import {TransverseData} from '../../models/constants/transverse-data'


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  loading = false;
  fields: any = {
    fields: 'id,first_name,last_name,email,picture,gender,age_range'
  };

  constructor(private router: Router,
              private userService: UserService,
              private fb: FacebookService) {
  }

  loginWithFacebook(): void {
    this.fb.login()
      .then(
        (response: LoginResponse) => {
          localStorage.setItem(TransverseData.accessToken, response.authResponse.accessToken);
          localStorage.setItem(TransverseData.currentUser, response.authResponse.userID);
          this.fb.api(`/${response.authResponse.userID}`, 'get', this.fields)
            .then(
              userInfo => {
                let user = new User();
                user._id = userInfo.id;
                user.email = userInfo.email;
                user.first_name = userInfo.first_name;
                user.last_name = userInfo.last_name;
                user.picture = userInfo.picture.data.url;
                this.userService.updateUser(user);
                this.router.navigate(['dashboard']);
              },
              error => console.error(error))
        },
        error => console.error(error))
      .catch((error: any) => console.error(error));
  }
}
