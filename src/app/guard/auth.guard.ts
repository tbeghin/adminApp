import {Injectable} from '@angular/core';
import {Router, CanActivate, CanActivateChild} from '@angular/router';
import {FacebookService, LoginStatus} from 'ngx-facebook';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(private fb: FacebookService, private router: Router) {
  }

  canActivate(): Promise<boolean> {
    return this.fb.getLoginStatus().then(
      (status: LoginStatus) => {
        console.log(status);
        if (status.status === 'connected') {
          return true;
        }
        this.router.navigate(['/login']);
        return false;
      },
      this.handleError
    ).catch(
      this.handleError
    );
  }

  canActivateChild(): Promise<boolean> {
    return this.canActivate();
  }

  handleError(message) {
    console.error(message);
    this.router.navigate(['/login']);
    return false;
  }
}
