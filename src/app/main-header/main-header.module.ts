import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainHeaderComponent} from './main-header.component';
import {NotificationComponent} from './notification/notification.component';
import {UserMenuComponent} from './user-menu/user-menu.component';
import {MatMenuModule, MatIconModule} from '@angular/material';
import {TestMenuComponent} from './test-menu/test-menu.component';

@NgModule({
  imports: [
    CommonModule,
    MatMenuModule,
    MatIconModule
  ],
  declarations: [MainHeaderComponent, NotificationComponent, UserMenuComponent, TestMenuComponent],
  exports: [MainHeaderComponent]
})
export class MainHeaderModule {
}
