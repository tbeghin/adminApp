import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {OsmcComponent} from './osmc.component';
import {OsmcService} from '../services/osmc.service';
import {ChangeNameComponent} from './osmc-modal/change-name/change-name.component';
import {MaterialModule} from '../material/material.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule
  ],
  providers: [OsmcService],
  declarations: [OsmcComponent, ChangeNameComponent]
})
export class OsmcModule {
}
