import {Component, Input, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
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

  constructor(private treeviewService: TreeviewService,
              public dialog: MatDialog) {
  }

  ngOnInit() {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(TreeviewModalComponent, {
      width: '500px',
      data: this.item
    });

    dialogRef.afterClosed().subscribe(result => {
      if (!!result) {
        this.item = result;
      }
    });
  }

  delete() {
    this.treeviewService.deleteTreeview(this.item._id).then(() => this.item = new Treeview());
  }
}
