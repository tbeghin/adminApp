import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TreeviewComponent} from './treeview.component';
import {TreeviewService} from '../services/treeview.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TreeviewComponent],
  providers: [TreeviewService]
})
export class TreeviewModule {
}
