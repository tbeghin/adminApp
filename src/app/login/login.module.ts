import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {SigninComponent} from './signin/signin.component';
import {MaterialModule} from '../material/material.module';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    MaterialModule
  ],
  declarations: [SigninComponent]
})
export class LoginModule {
}
