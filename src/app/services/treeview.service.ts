import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Treeview} from '../models/treeview';
import {Observable} from 'rxjs/Observable';
import {HandleError} from './handle-error';

@Injectable()
export class TreeviewService {
  private getUserUrl = 'http://localhost:3061/api/treeview';

  constructor(private http: HttpClient) {
  }

  getTreeview(): Observable<Treeview[]> {
    return this.http
      .get(this.getUserUrl)
      .map(res => res as Treeview[] || Array<Treeview>())
      .catch(err => Observable.throw(HandleError.createError(err)));
  }

  saveTreeview(treeview: any): Observable<Treeview> {
    return this.http
      .post(this.getUserUrl, treeview)
      .map(res => res as Treeview || null)
      .catch(err => Observable.throw(HandleError.createError(err)));
  }

  updateTreeview(treeview: Treeview): Observable<Treeview> {
    return this.http
      .put(`${this.getUserUrl}/${treeview._id}`, treeview)
      .map(res => res as Treeview || null)
      .catch(err => Observable.throw(HandleError.createError(err)));
  }

  // Implement a method to get the public deals
  deleteTreeview(id: string): Observable<Treeview> {
    return this.http
      .delete(`${this.getUserUrl}/${id}`)
      .map(res => res as Treeview || null)
      .catch(err => Observable.throw(HandleError.createError(err)));
  }
}
