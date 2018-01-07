import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from '../material/material.module';

import {TreeviewComponent} from './treeview.component';
import {TreeviewItemComponent} from './treeview-item/treeview-item.component';
import {TreeviewModalComponent} from './treeview-modal/treeview-modal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  declarations: [TreeviewComponent, TreeviewItemComponent, TreeviewModalComponent],
  entryComponents: [TreeviewModalComponent]
})
export class TreeviewModule {
}
