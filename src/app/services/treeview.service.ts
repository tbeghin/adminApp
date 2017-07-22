import {Injectable} from '@angular/core';
import {Headers, Http, Response} from '@angular/http';

@Injectable()
export class TreeviewService {
  private getUserUrl = 'http://localhost:3061/api/treeview';

  constructor(private http: Http) {
  }

  getTreeview() {
    return this.http
      .get(this.getUserUrl)
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
