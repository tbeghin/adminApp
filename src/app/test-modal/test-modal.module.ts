import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TestModalComponent} from './test-modal.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  declarations: [TestModalComponent]
})
export class TestModalModule {
}
