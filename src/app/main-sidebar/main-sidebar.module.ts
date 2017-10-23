import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainSidebarComponent } from './main-sidebar.component';
import { ListItemComponent } from './list-item/list-item.component';
import { ItemComponent } from './item/item.component';
import { UserPanelComponent } from './user-panel/user-panel.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MainSidebarComponent, ListItemComponent, ItemComponent, UserPanelComponent],
  exports: [MainSidebarComponent]
})
export class MainSidebarModule { }
