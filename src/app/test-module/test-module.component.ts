import {Component, OnInit, ViewChild} from '@angular/core';
import {BookingService} from '../services/booking.service';
import {Booking} from '../models/booking';
import {MatPaginator, PageEvent} from '@angular/material';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Component({
  selector: 'app-test-module',
  templateUrl: './test-module.component.html',
  styleUrls: ['./test-module.component.css']
})
export class TestModuleComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  length = 0;
  startIndex: number;
  endIndex: number;
  initialPage: PageEvent = new PageEvent();
  data: BehaviorSubject<Booking[]> = new BehaviorSubject(Array<Booking>());
  dataSource: Booking[] = Array<Booking>();

  constructor(private booking: BookingService) {
    this.initialPage = {
      length: 0,
      pageSize: 5,
      pageIndex: 0
    };
  }

  ngOnInit() {
    this.booking.getAllBooking().subscribe(value => this.data.next(value));
    this.data.subscribe(bookingList => {
      this.length = bookingList.length;
      this.resizeData(this.initialPage, bookingList);
    });
    this.paginator.page.subscribe((page: PageEvent) => {
      this.resizeData(page, this.data.getValue());
    });
  }

  resizeData(page: PageEvent, bookingList: Booking[]) {
    this.startIndex = page.pageIndex * page.pageSize;
    this.endIndex = this.startIndex + page.pageSize;
    this.dataSource = bookingList.slice(this.startIndex, this.endIndex);
  }
}
