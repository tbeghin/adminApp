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
    this.treeviewservice.getTreeview().subscribe(treeview => this.treeview = [...treeview, new Treeview()]);
  }

  save() {
    this.treeviewservice.saveTreeview(this.treeview);
  }

  onDeleteUser(index: number) {
    this.treeview.splice(index, 1);
  }

  onCreateUser() {
    this.treeview.push(new Treeview());
  }
}
