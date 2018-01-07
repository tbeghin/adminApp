import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Booking} from "../models/booking";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class BookingService {
  private getBookingUrl = 'http://localhost:3061/api/bookings';

  constructor(private http: HttpClient) {
  }

  // Implement a method to get the public deals
  getAllBooking(): Observable<Booking[]> {
    return this.http
      .get(this.getBookingUrl)
      .map(res => res as Booking[] || []);
  }
}
