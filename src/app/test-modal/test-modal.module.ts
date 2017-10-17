import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TestModalComponent} from './test-modal.component';
import {TestModalExampleComponent} from './test-modal-example/test-modal-example.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatDialogModule,
    FormsModule
  ],
  declarations: [TestModalExampleComponent, TestModalComponent],
  entryComponents: [TestModalExampleComponent]
})
export class TestModalModule {
}
