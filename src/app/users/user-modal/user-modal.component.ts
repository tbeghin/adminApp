import {Component, Input, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-user-modal',
  templateUrl: './user-modal.component.html',
  styleUrls: ['./user-modal.component.css']
})
export class UserModalComponent implements OnInit {
  @Input() user: any;

  constructor(public dialogRef: MatDialogRef<UserModalComponent>) {
  }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
