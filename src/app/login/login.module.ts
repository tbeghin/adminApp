import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import { SignoutComponent } from './signout/signout.component';
import { SigninComponent } from './signin/signin.component';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  declarations: [SignoutComponent, SigninComponent]
})
export class LoginModule {
}
