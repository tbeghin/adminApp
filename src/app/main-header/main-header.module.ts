import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainHeaderComponent} from './main-header.component';
import {NotificationComponent} from './notification/notification.component';
import {UserMenuComponent} from './user-menu/user-menu.component';
import {TestMenuComponent} from './test-menu/test-menu.component';
import {MaterialModule} from '../material/material.module';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],
  declarations: [MainHeaderComponent, NotificationComponent, UserMenuComponent, TestMenuComponent],
  exports: [MainHeaderComponent]
})
export class MainHeaderModule {
}
