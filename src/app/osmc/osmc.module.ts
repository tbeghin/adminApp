import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {OsmcComponent} from './osmc.component';
import {OsmcService} from './osmc.service';
import {ChangeNameComponent} from './osmc-modal/change-name/change-name.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [OsmcService],
  declarations: [OsmcComponent, ChangeNameComponent]
})
export class OsmcModule {
}
