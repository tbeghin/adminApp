import {Routes} from "@angular/router";

import {OsmcComponent} from "../../osmc/osmc.component";
import {AuthGuard} from "../../guard/auth.guard";
import {ContentComponent} from "../../content/content.component";
import {SigninComponent} from "../../login/signin/signin.component";
import {DashboardComponent} from "../../dashboard/dashboard.component";
import {TreeviewComponent} from "../../treeview/treeview.component";
import {UsersComponent} from "../../users/users.component";
import {TestModuleComponent} from "../../test-module/test-module.component";
import {ErrorPageComponent} from "../../content/error-page/error-page.component";

export const APP_ROUTES: Routes = [
  {
    path: '', component: ContentComponent, canActivate: [AuthGuard],
    children: [
      {path: 'dashboard', component: DashboardComponent},
      {path: 'testPage', component: TestModuleComponent},
      {path: 'osmc', component: OsmcComponent},
      {path: 'users', component: UsersComponent},
      {path: 'treeview', component: TreeviewComponent},
      {path: '', redirectTo: 'dashboard', pathMatch: 'full'}
    ]
  },
  {path: 'login', component: SigninComponent},
  {path: '**', component: ErrorPageComponent}
];
