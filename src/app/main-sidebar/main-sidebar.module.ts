import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainSidebarComponent } from './main-sidebar.component';
import { ListItemComponent } from './list-item/list-item.component';
import { ItemComponent } from './item/item.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MainSidebarComponent, ListItemComponent, ItemComponent],
  exports: [MainSidebarComponent]
})
export class MainSidebarModule { }
