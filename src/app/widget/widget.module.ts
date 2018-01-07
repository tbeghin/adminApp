import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialModule} from '../material/material.module';
import {InformationBadgeComponent} from './information-badge/information-badge.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [InformationBadgeComponent],
  exports: [InformationBadgeComponent]
})
export class WidgetModule {
}
