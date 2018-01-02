import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Treeview} from '../models/treeview';

@Injectable()
export class TreeviewService {
  private getUserUrl = 'http://localhost:3061/api/treeview';

  constructor(private http: HttpClient) {
  }

  getTreeview() {
    return this.http
      .get(this.getUserUrl)
      .toPromise()
      .then(response => response as Treeview)
      .catch(this.handleError);
  }

  saveTreeview(treeview: any) {
    return this.http
      .post(this.getUserUrl, treeview)
      .toPromise()
      .then(response => response as Treeview)
      .catch(this.handleError);
  }

  updateTreeview(treeview: Treeview) {
    return this.http
      .put(`${this.getUserUrl}/${treeview._id}`, treeview)
      .toPromise()
      .then(response => response as Treeview)
      .catch(this.handleError);
  }

  // Implement a method to get the public deals
  deleteTreeview(id: string) {
    return this.http
      .delete(`${this.getUserUrl}/${id}`)
      .toPromise()
      .then(response => response as Treeview)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
