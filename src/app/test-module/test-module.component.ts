import {Component} from '@angular/core';
import {BookingService} from "../services/booking.service";
import {Booking} from "../models/booking";

@Component({
  selector: 'app-test-module',
  templateUrl: './test-module.component.html',
  styleUrls: ['./test-module.component.css']
})
export class TestModuleComponent {
  data: Booking[];

  constructor(private booking: BookingService) {
    this.booking.getAllUser().subscribe(value => this.data = value)
  }
}
