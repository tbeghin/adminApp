import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {TreeviewService} from '../services/treeview.service';
import {Treeview} from '../models/treeview';
import * as _ from 'lodash';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  treeviewPanel: Treeview = new Treeview();

  constructor(private route: Router, private treeviewService: TreeviewService) {
    this.treeviewService.getTreeview().then(
      treeviews => {
        this.treeviewPanel = _.find(
          treeviews,
          treeview => treeview.url == this.route.url
        );
        this.treeviewPanel = this.treeviewPanel || new Treeview();
      }
    );
  }

  ngOnInit() {
  }

}
