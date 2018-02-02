import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from "rxjs/Observable";
import {OsmcContainer} from "../models/osmc-container";
import {AddFolderRequest} from "./models/add-folder-request";
import {HandleError} from './handle-error';

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
      .map(response => response as OsmcContainer)
      .catch(err => Observable.throw(HandleError.createError(err)));
  }

  updateFileName(before, after): Observable<void> {
    return this.http
      .put(this.getOsmcUrl, {before: before, after: after})
      .catch(err => Observable.throw(HandleError.createError(err)));
  }

  addFolder(folderPath: string, folderName: string): Observable<string> {
    const body: AddFolderRequest = new AddFolderRequest(folderPath, folderName);
    return this.http
      .post(this.getOsmcUrl, body)
      .map(response => response as string)
      .catch(err => Observable.throw(HandleError.createError(err)));
  }
}
