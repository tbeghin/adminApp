import {Component, Inject} from '@angular/core';
import {TreeviewService} from '../../services/treeview.service';
import {Treeview} from '../../models/treeview';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-treeview-modal',
  templateUrl: './treeview-modal.component.html',
  styleUrls: ['./treeview-modal.component.css']
})
export class TreeviewModalComponent {


  constructor(private treeviewService: TreeviewService,
              public dialogRef: MatDialogRef<TreeviewModalComponent>,
              @Inject(MAT_DIALOG_DATA) public item: Treeview) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  save() {
    if (this.item._id) {
      this.treeviewService.updateTreeview(this.item).then(item => this.item = item);
    } else {
      this.treeviewService.saveTreeview(this.item).then(item => this.item = item);
    }
    this.dialogRef.close();
  }

}
