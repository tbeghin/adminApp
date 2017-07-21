import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login.component';
import {forEach} from "@angular/router/src/utils/collection";

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  declarations: [LoginComponent]
})
export class LoginModule {
}
