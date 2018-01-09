import {Component, OnInit} from '@angular/core';
import {Treeview} from '../../models/treeview';
import {TreeviewService} from '../../services/treeview.service';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {
  listItem: Array<Treeview>;

  constructor(private treeviewservice: TreeviewService) {
  }

  ngOnInit() {
    this.treeviewservice.getTreeview().subscribe(
      treeview => {
        const childrenElt: Array<Treeview> = [];
        const mainItem: Array<Treeview> = [];
        for (const item of treeview) {
          if (item.parent) {
            childrenElt.push(item);
          }
        }
        for (const item of treeview) {
          if (!item.parent) {
            mainItem.push(item);
          }
        }

        for (const child of childrenElt) {
          for (const main of mainItem) {
            if (main._id === child.parent) {
              if (!main.children) {
                main.children = [];
              }
              main.children.push(child);
            }
          }
        }

        this.listItem = mainItem;
      });
  }
}
