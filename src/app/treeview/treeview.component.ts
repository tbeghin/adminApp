import { Component, OnInit } from '@angular/core';
import {TreeviewService} from '../services/treeview.service';


@Component({
  selector: 'app-treeview',
  templateUrl: './treeview.component.html',
  styleUrls: ['./treeview.component.css']
})
export class TreeviewComponent implements OnInit {
  treeview;

  constructor(private treeviewservice: TreeviewService) { }

  ngOnInit() {
    this.treeviewservice.getTreeview().then(treeview => this.treeview = treeview)
  }

}
