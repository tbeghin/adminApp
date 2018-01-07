import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardComponent} from './dashboard.component';
import {WidgetModule} from '../widget/widget.module'
import {MaterialModule} from '../material/material.module';
import {BookingTableComponent} from './booking-table/booking-table.component';

@NgModule({
  imports: [
    CommonModule,
    WidgetModule,
    MaterialModule
  ],
  declarations: [DashboardComponent, BookingTableComponent]
})
export class DashboardModule {
}
