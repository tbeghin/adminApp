import { Component, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-test-modal-example',
  templateUrl: './test-modal-example.component.html'
})
export class TestModalExampleComponent {
  constructor(
    public dialogRef: MatDialogRef<TestModalExampleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
