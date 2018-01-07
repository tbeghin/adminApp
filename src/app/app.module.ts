import {BrowserModule} from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {UserService} from './services/user.service';
import {FacebookService} from 'ngx-facebook';
import {AuthService} from './services/auth.service';
import {TreeviewService} from './services/treeview.service';
import {AuthGuard} from './guard/auth.guard';
import {BookingService} from './services/booking.service';

import {AppRoutingModule} from './app-routing/app-routing.module';
import {ContentModule} from './content/content.module';
import {LoginModule} from './login/login.module';
import {TreeviewModule} from './treeview/treeview.module';
import {UsersModule} from './users/users.module';
import {OsmcModule} from './osmc/osmc.module';
import {TestModuleModule} from './test-module/test-module.module';
import {WidgetModule} from './widget/widget.module';
import {UserProfilModule} from './user-profil/user-profil.module';

import {AppComponent} from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    LoginModule,
    ContentModule,
    OsmcModule,
    TreeviewModule,
    UsersModule,
    UserProfilModule,
    TestModuleModule,
    FormsModule,
    WidgetModule,
    BrowserAnimationsModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr' },
    FacebookService,
    AuthService,
    UserService,
    TreeviewService,
    AuthGuard,
    BookingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
