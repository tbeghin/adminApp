import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UsersComponent} from './users.component';
import {UserItemComponent} from './user-item/user-item.component';
import {FormsModule} from '@angular/forms';
import {MatDialogModule, MatInputModule, MatSelectModule, MatButtonModule} from '@angular/material';
import {UserModalComponent} from './user-modal/user-modal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatDialogModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule
  ],
  declarations: [UsersComponent, UserItemComponent, UserModalComponent],
  entryComponents: [UserModalComponent]
})
export class UsersModule {
}
