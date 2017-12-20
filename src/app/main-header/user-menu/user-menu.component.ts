import {Component, OnInit} from '@angular/core';
import {AuthResponse, FacebookService, LoginStatus} from "ngx-facebook";
import {TransverseData} from "../../models/constants/transverse-data";

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.css']
})
export class UserMenuComponent implements OnInit {

  constructor(private fb: FacebookService) {
  }

  ngOnInit() {
  }

  logout(): void {
    this.fb.getLoginStatus().then(
      (loginStatus: LoginStatus) => {
        console.info(loginStatus);
        if (loginStatus.status === 'connected') {
          this.fb.logout().then(
            (authResponse: AuthResponse) => {
              localStorage.removeItem(TransverseData.accessToken);
              localStorage.removeItem(TransverseData.currentUser);
            }
          );
        }
      }
    );
  }
}
