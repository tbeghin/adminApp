import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {OsmcFile} from '../models/osmcFile';

@Injectable()
export class OsmcService {
  private getOsmcUrl = 'http://localhost:3061/api/osmcFiles';

  constructor(private http: HttpClient) {
  }

  getOsmcFile() {
    return this.http
      .get(this.getOsmcUrl)
      .toPromise()
      .then(response => response as OsmcFile)
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
