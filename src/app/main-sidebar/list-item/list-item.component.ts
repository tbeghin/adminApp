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
  }

  ngOnInit() {
    this.treeviewservice.getTreeview().then(
      treeview => {
        let childrenElt = [];
        let mainItem = [];
        for(let item of treeview){
          if(item.parent){
            childrenElt.push(item)
          }
        }
        for(let item of treeview){
          if(!item.parent){
            mainItem.push(item)
          }
        }

        for(let child of childrenElt){
          for(let main of mainItem){
            if(main._id === child.parent){
              if (!main.children){
                main.children = []
              }
              main.children.push(child);
            }
          }
        }

        this.listItem = mainItem
      });
  }
}
