import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {BookingTableComponent} from './booking-table.component';
import {MaterialModule} from '../../material/material.module';
import {BookingService} from '../../services/booking.service';

class MockBookingService extends BookingService {
}

describe('BookingTableComponent', () => {
  let component: BookingTableComponent;
  let fixture: ComponentFixture<BookingTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BookingTableComponent],
      imports: [
        MaterialModule
      ],
      providers: [
        {
          provide: BookingService,
          useClass: MockBookingService
        }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
