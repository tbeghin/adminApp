import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { ContentRoutingModule} from './content-routing.module';
import { MainHeaderModule } from '../main-header/main-header.module';
import { MainSidebarModule } from '../main-sidebar/main-sidebar.module';
import { DashboardModule } from '../dashboard/dashboard.module';

import { ContentComponent } from './content.component';

@NgModule({
  imports: [
    CommonModule,
    MainHeaderModule,
    MainSidebarModule,
    DashboardModule,
    ContentRoutingModule
  ],
  declarations: [ContentComponent],
  exports: [ContentComponent]
})
export class ContentModule { }
