import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UsersComponent} from './users.component';
import {UserItemComponent} from './user-item/user-item.component';
import {FormsModule} from '@angular/forms';
import {UserModalComponent} from './user-modal/user-modal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [UsersComponent, UserItemComponent, UserModalComponent],
  entryComponents: [UserModalComponent]
})
export class UsersModule {
}
