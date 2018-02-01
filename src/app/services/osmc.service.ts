import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {OsmcFile} from '../models/osmcFile';
import {Observable} from "rxjs/Observable";
import {OsmcContainer} from "../models/osmc-container";
import {AddFolderRequest} from "./models/add-folder-request";

@Injectable()
export class OsmcService {
  private getOsmcUrl = 'http://localhost:3062/api/osmcFiles';
  private params = new HttpParams();

  constructor(private http: HttpClient) {
  }

  getOsmcFile(folderPath: string): Observable<OsmcContainer> {
    this.params = this.params.set('folderPath', folderPath);
    return this.http
      .get(this.getOsmcUrl, {params: this.params})
      .map(response => response as OsmcFile)
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

  addFolder(folderPath: string, folderName: string): Observable<string> {
    const body: AddFolderRequest = new AddFolderRequest(folderPath, folderName);
    return this.http
      .post(this.getOsmcUrl, body)
      .map(response => response as string)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
