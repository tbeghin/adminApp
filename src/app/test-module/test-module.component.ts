import {Component, OnInit,AfterViewInit,  ViewChild} from '@angular/core';
import {BookingService} from "../services/booking.service";
import {Booking} from "../models/booking";
import {MatPaginator} from "@angular/material";
import {BehaviorSubject} from "rxjs/BehaviorSubject";

@Component({
  selector: 'app-test-module',
  templateUrl: './test-module.component.html',
  styleUrls: ['./test-module.component.css']
})
export class TestModuleComponent implements OnInit, AfterViewInit {
  length = 100;
  pageSize = 2;
  data: BehaviorSubject<Booking[]> = new BehaviorSubject(Array<Booking>());
  dataSource: Booking[] = Array<Booking>();

  constructor(private booking: BookingService) {
    this.booking.getAllUser().subscribe(value => this.data.next(value))
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
  }

  ngAfterViewInit(){
    let startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    let endIndex = startIndex + this.paginator.pageSize;
    this.data.subscribe(bookingList => {
      this.paginator.length = bookingList.length;
      this.dataSource = bookingList.slice(startIndex, endIndex)
    });
  }
}
