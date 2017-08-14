import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AuthGuard} from '../guard/auth.guard';

import {ContentComponent} from './content.component';
import {DashboardComponent} from '../dashboard/dashboard.component';
import {SigninComponent} from '../login/signin/signin.component';
import {UsersComponent} from '../users/users.component';
import {TreeviewComponent} from '../treeview/treeview.component';
import {ErrorPageComponent} from './error-page/error-page.component';

const appRoutes: Routes = [
  {
    path: '', component: ContentComponent, canActivate: [AuthGuard],
    children: [
      {path: 'dashboard', component: DashboardComponent},
      {path: 'users', component: UsersComponent},
      {path: 'treeview', component: TreeviewComponent},
      {path: '', redirectTo: 'dashboard', pathMatch: 'full'}
    ]
  },
  {path: 'login', component: SigninComponent},
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
export class ContentRoutingModule {
}
