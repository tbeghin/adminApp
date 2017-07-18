import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ContentComponent} from '../content/content.component';
import {DashboardComponent} from '../dashboard/dashboard.component';
import {ErrorPageComponent} from './error-page/error-page.component';
import {LoginComponent} from '../login/login.component';

const appRoutes: Routes = [
  {
    path: 'home', component: ContentComponent,
    children: [
      {path: 'dashboard', component: DashboardComponent}]
  },
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: ErrorPageComponent}
];

@NgModule({
  declarations: [
    ErrorPageComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true} // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
