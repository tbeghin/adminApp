import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {TreeviewComponent} from './treeview.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [TreeviewComponent],
  providers: []
})
export class TreeviewModule {
}
