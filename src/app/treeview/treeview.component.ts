import {Component, OnInit} from '@angular/core';
import {TreeviewService} from '../services/treeview.service';

import {Treeview} from '../models/treeview';


@Component({
  selector: 'app-treeview',
  templateUrl: './treeview.component.html',
  styleUrls: ['./treeview.component.css']
})
export class TreeviewComponent implements OnInit {
  treeview: Array<Treeview>;

  constructor(private treeviewservice: TreeviewService) {
  }

  ngOnInit() {
    this.treeviewservice.getTreeview().then(treeview => this.treeview = treeview);
  }

  editItem(id: string) {
    this.treeview.map(item => {
      if (item._id === id) {
        item.isEditable = !item.isEditable;
      }
    });
  }
}
