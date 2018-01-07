import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {OsmcComponent} from './osmc.component';
import {OsmcService} from '../services/osmc.service';
import {ChangeNameComponent} from './osmc-modal/change-name/change-name.component';
import {MaterialModule} from '../material/material.module';
import {SortPipe} from '../pipe/sort.pipe';
import {AddFolderComponent} from './osmc-modal/add-folder/add-folder/add-folder.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [OsmcService],
  declarations: [
    OsmcComponent,
    ChangeNameComponent,
    SortPipe,
    AddFolderComponent
  ],
  entryComponents: [AddFolderComponent]
})
export class OsmcModule {
}
