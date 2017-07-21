import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';


import {UserService} from './services/user.service';
import {AuthService} from './services/auth.service';
import {AuthGuard} from './guard/auth.guard'

import {AppRoutingModule} from './app-routing/app-routing.module';
import {ContentModule} from './content/content.module';
import {LoginModule} from './login/login.module';

import {AppComponent} from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    HttpModule,
    BrowserModule,
    LoginModule,
    ContentModule
  ],
  providers: [
    AuthService,
    UserService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
