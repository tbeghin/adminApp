import {Component, OnInit} from '@angular/core';
import {TreeviewService} from '../services/treeview.service';
import {Treeview} from '../models/treeview';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  treeviewPanel: Treeview;

  constructor(private treeviewService: TreeviewService) {
    this.treeviewService.getTreeview();
    this.treeviewPanel = {
      _id: '1234',
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'fa fa-dashboard',
      description: 'La description',
      grade: 0,
      isDisabled: false
    };
  }

  ngOnInit() {
  }

}
