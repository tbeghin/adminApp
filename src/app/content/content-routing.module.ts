import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ContentComponent} from './content.component';
import {DashboardComponent} from '../dashboard/dashboard.component';

const appRoutes: Routes = [
  {
    path: '', component: ContentComponent,
    children: [
      {path: '', component: DashboardComponent}
    ]
  }
];

@NgModule({
  declarations: [],
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
