import {NgModule} from '@angular/core';

import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {MainHeaderModule} from '../main-header/main-header.module';
import {MainSidebarModule} from '../main-sidebar/main-sidebar.module';
import {DashboardModule} from '../dashboard/dashboard.module';
import {MaterialModule} from '../material/material.module';

import {ContentComponent} from './content.component';
import {ErrorPageComponent} from "./error-page/error-page.component";
import {TitlePanelComponent} from './title-panel/title-panel.component';

@NgModule({
  imports: [
    CommonModule,
    MainHeaderModule,
    MainSidebarModule,
    DashboardModule,
    RouterModule,
    MaterialModule
  ],
  declarations: [ContentComponent, ErrorPageComponent, TitlePanelComponent],
  exports: [ContentComponent]
})
export class ContentModule {
}
