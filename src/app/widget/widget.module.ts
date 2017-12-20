import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InformationBadgeComponent} from './information-badge/information-badge.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [InformationBadgeComponent],
  exports: [InformationBadgeComponent]
})
export class WidgetModule {
}
