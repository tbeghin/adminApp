import {Component, Output, Inject, OnInit, EventEmitter} from '@angular/core';
import {TreeviewService} from '../../services/treeview.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Treeview} from '../../models/treeview';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-treeview-modal',
  templateUrl: './treeview-modal.component.html',
  styleUrls: ['./treeview-modal.component.css']
})
export class TreeviewModalComponent implements OnInit {
  @Output() onCreate: EventEmitter<any> = new EventEmitter();
  url: FormControl;
  description: FormControl;
  grade: FormControl;
  treeviewForms: FormGroup;


  constructor(private treeviewService: TreeviewService,
              public dialogRef: MatDialogRef<TreeviewModalComponent>,
              @Inject(MAT_DIALOG_DATA) public item: Treeview) {
  }

  ngOnInit() {
    this.url = new FormControl(this.item.url);
    this.description = new FormControl(this.item.description);
    this.grade = new FormControl(this.item.grade);
    this.treeviewForms = new FormGroup(
      {
        url: this.url,
        description: this.description,
        grade: this.grade,
      });
  }

  onNoClick(): void {
    this.dialogRef.close(false);
  }

  save() {
    if (this.treeviewForms.valid) {
      this.item.url = this.url.value;
      this.item.description = this.description.value;
      this.item.grade = this.grade.value;
      if (this.item._id) {
        this.treeviewService.updateTreeview(this.item).subscribe(item => this.dialogRef.close(item));
      } else {
        this.treeviewService.saveTreeview(this.item).subscribe(item => {
          this.dialogRef.close(item);
          this.onCreate.emit();
        });
      }
      this.dialogRef.close();
    }
  }

}
