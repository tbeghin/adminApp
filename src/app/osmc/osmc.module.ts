import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {OsmcComponent} from './osmc.component';
import {OsmcService} from './osmc.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [OsmcService],
  declarations: [OsmcComponent]
})
export class OsmcModule {
}
