import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {APP_ROUTES} from '../models/constants/route';

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(
      APP_ROUTES,
      {enableTracing: true} // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
