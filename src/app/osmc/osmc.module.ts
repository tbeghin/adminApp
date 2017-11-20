import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {OsmcComponent} from './osmc.component';
import {OsmcService} from './osmc.service';
import {MatTabsModule, MatCardModule, MatListModule, MatIconModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatTabsModule,
    MatCardModule,
    MatListModule,
    MatIconModule
  ],
  providers: [OsmcService],
  declarations: [OsmcComponent]
})
export class OsmcModule {
}
