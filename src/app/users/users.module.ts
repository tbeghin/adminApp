import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialModule} from '../material/material.module';
import {UsersComponent} from './users.component';
import {UserItemComponent} from './user-item/user-item.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {UserModalComponent} from './user-modal/user-modal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  declarations: [UsersComponent, UserItemComponent, UserModalComponent],
  entryComponents: [UserModalComponent]
})
export class UsersModule {
}
