import {Component, OnInit} from '@angular/core';
import {TreeviewService} from '../../services/treeview.service';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {
  listItem: Array<any>;

  constructor(private treeviewservice: TreeviewService) {
    this.treeviewservice.getTreeview().then(treeview => this.listItem = treeview);
  }

  ngOnInit() {
  }
}
