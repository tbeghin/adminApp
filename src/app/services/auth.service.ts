import {Injectable} from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import {tokenNotExpired} from 'angular2-jwt';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
  public token: string;
  private getAuthUrl = 'http://localhost:3061/api/authenticate';

  constructor(private http: Http) {
    // set token if saved in local storage
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = currentUser && currentUser.token;
  }

  login(username: string, password: string): Observable<boolean> {
    return this.http.post(this.getAuthUrl, {username: username, password: password})
      .map(
        (response: Response) => {
          // login successful if there's a jwt token in the response
          const token = response.json() && response.json().token;
          if (token && token !== '') {
            // set token property
            this.token = token;

            // store username and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', JSON.stringify({username: username, token: token}));

            // return true to indicate successful login
            return true;
          } else {
            // return false to indicate failed login
            return false;
          }
        },
        error => console.log(error)
      );
  }

  logout(): void {
    // clear token remove user from local storage to log user out
    this.token = null;
    localStorage.removeItem('currentUser');
  }

  loggedIn(): boolean {
    const isNotExpired = tokenNotExpired('currentUser');
    console.log(isNotExpired);
    return isNotExpired;
  }
}
