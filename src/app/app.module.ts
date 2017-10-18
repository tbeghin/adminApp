import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';

import {UserService} from './services/user.service';
import {AuthService} from './services/auth.service';
import {TreeviewService} from './services/treeview.service';
import {AuthGuard} from './guard/auth.guard';

import {AppRoutingModule} from './app-routing/app-routing.module';
import {ContentModule} from './content/content.module';
import {LoginModule} from './login/login.module';
import {TreeviewModule} from './treeview/treeview.module';
import {UsersModule} from './users/users.module';
import {OsmcModule} from './osmc/osmc.module';
import {TestModuleModule} from './test-module/test-module.module';

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
    ContentModule,
    OsmcModule,
    TreeviewModule,
    UsersModule,
    TestModuleModule,
    FormsModule
  ],
  providers: [
    AuthService,
    UserService,
    TreeviewService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
