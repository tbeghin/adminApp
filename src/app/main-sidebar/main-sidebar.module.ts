import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainSidebarComponent } from './main-sidebar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MainSidebarComponent],
  exports: [MainSidebarComponent]
})
export class MainSidebarModule { }
