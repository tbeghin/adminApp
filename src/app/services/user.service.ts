import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {User} from '../models/user';
import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {TransverseData} from '../models/constants/transverse-data';

@Injectable()
export class UserService {
  // Define the routes we are going to interact with
  private getUserUrl = 'http://localhost:3061/api/users';

  constructor(private http: HttpClient) {
  }

  actualUser: BehaviorSubject<User> = new BehaviorSubject(new User());

  loadActualUser(): void {
    const currentUserId: string = localStorage.getItem(TransverseData.currentUser);
    this.getUser(currentUserId).subscribe(value => this.actualUser.next(value));
  }

  // Implement a method to get the public deals
  getUser(id: string): Observable<User> {
    console.log(`Service getUser : ${id}`);
    return this.http
      .get(`${this.getUserUrl}/${id}`)
      .map(res => res as User || null);
  }

  // Implement a method to get the public deals
  getAllUser(): Observable<User[]> {
    return this.http
      .get(this.getUserUrl)
      .map(res => res as User[] || []);
  }

  // Implement a method to get the public deals
  addUser(user: User): Observable<User> {
    return this.http
      .post(this.getUserUrl, user)
      .map(res => res as User || null);
  }

  updateUser(user: User): Observable<User> {
    console.log(`Service updateUser`);
    return this.http
      .put(`${this.getUserUrl}/${user._id}`, user)
      .map(res => res as User || null);
  }

  // Implement a method to get the public deals
  deleteUser(id: string): Observable<void> {
    return this.http
      .delete(`${this.getUserUrl}/${id}`)
      .map(res => console.log(res));
  }
}
