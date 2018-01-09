import {Component, OnInit} from '@angular/core';
import {AuthResponse, FacebookService, LoginStatus} from 'ngx-facebook';
import {TransverseData} from '../../models/constants/transverse-data';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.css']
})
export class UserMenuComponent implements OnInit {

  constructor(private fb: FacebookService, private router: Router) {
  }

  ngOnInit() {
  }

  logout(): void {
    const accessToken = localStorage.getItem(TransverseData.accessToken);
    this.fb.getLoginStatus().then(
      (loginStatus: LoginStatus) => {
        if (loginStatus.status === 'connected') {
          this.fb.logout().then(
            (authResponse: AuthResponse) => {
              localStorage.removeItem(TransverseData.accessToken);
              localStorage.removeItem(TransverseData.currentUser);
              this.router.navigate(['login']);
            }
          );
        }
      }
    );
  }
}
