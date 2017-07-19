import {Injectable} from '@angular/core';
import {Headers, Http, Response} from '@angular/http';

import 'rxjs/add/operator/toPromise';

import {User} from '../models/user';

@Injectable()
export class UserService {
  // Define the routes we are going to interact with
  private getUserUrl = 'http://localhost:3003/api/users';

  constructor(private http: Http) {
  }

  // Implement a method to get the public deals
  getUser(id: number) {
    return this.http
      .get(`${this.getUserUrl}/${id}`)
      .toPromise()
      .then(response => response.json() as User)
      .catch(this.handleError);
  }

  // Implement a method to handle errors if any
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
