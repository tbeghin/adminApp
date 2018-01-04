import {Component, OnInit, AfterViewInit, ViewChild} from '@angular/core';
import {BookingService} from "../services/booking.service";
import {Booking} from "../models/booking";
import {MatPaginator, PageEvent} from "@angular/material";
import {BehaviorSubject} from "rxjs/BehaviorSubject";

@Component({
  selector: 'app-test-module',
  templateUrl: './test-module.component.html',
  styleUrls: ['./test-module.component.css']
})
export class TestModuleComponent implements OnInit, AfterViewInit {
  length: number = 0;
  initialPage: PageEvent = new PageEvent();
  data: BehaviorSubject<Booking[]> = new BehaviorSubject(Array<Booking>());
  dataSource: Booking[] = Array<Booking>();

  constructor(private booking: BookingService) {
    this.initialPage = {
      length: 0,
      pageSize: 5,
      pageIndex: 0
    };
    this.booking.getAllUser().subscribe(value => this.data.next(value))
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.paginator.page.subscribe((page: PageEvent) => {
      this.resizeData(page);
    });
    this.paginator.page.emit(this.initialPage);
  }

  resizeData(page: PageEvent) {
    let startIndex = page.pageIndex * page.pageSize;
    let endIndex = startIndex + page.pageSize;
    this.data.subscribe(bookingList => {
      this.length = bookingList.length;
      this.dataSource = bookingList.slice(startIndex, endIndex)
    });
  }
}
