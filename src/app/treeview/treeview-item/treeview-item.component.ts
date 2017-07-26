import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-treeview-item',
  templateUrl: './treeview-item.component.html',
  styleUrls: ['./treeview-item.component.css']
})
export class TreeviewItemComponent implements OnInit {
  @Input() item: any;

  constructor() {
  }

  ngOnInit() {
  }

  editItem() {
    this.item.isEditable = !this.item.isEditable;
  }
}
