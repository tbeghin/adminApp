import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {OsmcFile} from '../models/osmcFile';

@Injectable()
export class OsmcService {
  private getOsmcUrl = 'http://localhost:3062/api/osmcFiles';
  private params = new HttpParams();

  constructor(private http: HttpClient) {
  }

  getOsmcFile(folderPath: string) {
    this.params = this.params.set('folderPath', folderPath);
    return this.http
      .get(this.getOsmcUrl, {params: this.params})
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
