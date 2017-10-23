import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainHeaderComponent } from './main-header.component';
import { NotificationComponent } from './notification/notification.component';
import { UserMenuComponent } from './user-menu/user-menu.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MainHeaderComponent, NotificationComponent, UserMenuComponent],
  exports: [MainHeaderComponent]
})
export class MainHeaderModule { }
