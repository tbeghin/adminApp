import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardComponent} from './dashboard.component';
import {WidgetModule} from '../widget/widget.module'

@NgModule({
  imports: [
    CommonModule,
    WidgetModule
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule {
}
