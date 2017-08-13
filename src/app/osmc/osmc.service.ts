import {Injectable} from '@angular/core';
import {Headers, Http, Response} from '@angular/http';

@Injectable()
export class OsmcService {
  private getOsmcUrl = 'http://localhost:3062/api/osmcFiles';

  constructor(private http: Http) {
  }

  getOsmcFile() {
    return this.http
      .get(this.getOsmcUrl)
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  updateFileName(before, after) {
    return this.http
      .put(this.getOsmcUrl, {before: before, after: after})
      .toPromise()
      .then(
        success => console.log(success),
        error => console.log(error)
      )
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
