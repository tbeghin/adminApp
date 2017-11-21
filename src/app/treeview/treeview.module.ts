import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {TreeviewComponent} from './treeview.component';
import {TreeviewItemComponent} from './treeview-item/treeview-item.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [TreeviewComponent, TreeviewItemComponent],
  providers: []
})
export class TreeviewModule {
}
