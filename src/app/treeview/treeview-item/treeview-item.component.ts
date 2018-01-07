import {Component, Input, Output, OnInit, EventEmitter} from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {TreeviewService} from '../../services/treeview.service';
import {TreeviewModalComponent} from '../treeview-modal/treeview-modal.component';
import {Treeview} from '../../models/treeview';

@Component({
  selector: 'app-treeview-item',
  templateUrl: './treeview-item.component.html',
  styleUrls: ['./treeview-item.component.css']
})
export class TreeviewItemComponent implements OnInit {
  @Input() item: Treeview;
  @Output() onDelete: EventEmitter<any> = new EventEmitter();

  constructor(private treeviewService: TreeviewService,
              public dialog: MatDialog) {
  }

  ngOnInit() {
  }

  openDialog(): void {
    const dialogConfig = {
      width: '500px',
      data: this.item
    };

    const dialogRef = this.dialog.open(TreeviewModalComponent, dialogConfig as MatDialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      if (!!result) {
        this.item = result;
      }
    });
  }

  delete() {
    this.treeviewService.deleteTreeview(this.item._id).then(() => this.onDelete.emit());
  }
}
