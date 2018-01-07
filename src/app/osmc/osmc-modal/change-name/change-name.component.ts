import { Component, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-change-name-modal',
  templateUrl: './change-name.component.html',
  styleUrls: ['./change-name.component.css']
})
export class ChangeNameComponent {
  constructor(public dialogRef: MatDialogRef<ChangeNameComponent>,
              @Inject(MAT_DIALOG_DATA) public osmcFile: any) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  save() {
  }
}
