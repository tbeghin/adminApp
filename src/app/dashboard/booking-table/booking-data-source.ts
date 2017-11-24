import {DataSource} from '@angular/cdk/collections' ;
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';

export class BookingDataSource extends DataSource<any> {
  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<Element[]> {
    return Observable.of();
  }

  disconnect() {}
}
