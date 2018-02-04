import {Component, ViewChild} from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';
// import {Router} from '@angular/router';
import {TreeviewService} from '../services/treeview.service';
import {Treeview} from '../models/treeview';
import * as _ from 'lodash';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  @ViewChild('sidenav') sidenav: MatSidenav;
  treeviewPanel: Treeview = new Treeview();

  constructor(/*private route: Router,*/ private treeviewService: TreeviewService) {
    this.treeviewService.getTreeview().subscribe(
      treeviews => {
        this.treeviewPanel = _.find(
          treeviews,
          // treeview => treeview.url === this.route.url
          treeview => treeview.url === 'test'
        );
        this.treeviewPanel = this.treeviewPanel || new Treeview();
      }
    );
  }
}
