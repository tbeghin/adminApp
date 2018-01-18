import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Treeview} from '../models/treeview';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class TreeviewService {
  private getUserUrl = 'http://localhost:3061/api/treeview';

  constructor(private http: HttpClient) {
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  getTreeview(): Observable<{} | Treeview[]> {
    return this.http
      .get(this.getUserUrl)
      .map(res => res as Treeview[] || Array<Treeview>())
      .catch(this.handleError);
  }

  saveTreeview(treeview: any): Observable<{} | Treeview> {
    return this.http
      .post(this.getUserUrl, treeview)
      .map(res => res as Treeview || null)
      .catch(this.handleError);
  }

  updateTreeview(treeview: Treeview): Observable<{} | Treeview> {
    return this.http
      .put(`${this.getUserUrl}/${treeview._id}`, treeview)
      .map(res => res as Treeview || null)
      .catch(this.handleError);
  }

  // Implement a method to get the public deals
  deleteTreeview(id: string): Observable<{} | Treeview> {
    return this.http
      .delete(`${this.getUserUrl}/${id}`)
      .map(res => res as Treeview || null)
      .catch(this.handleError);
  }
}
