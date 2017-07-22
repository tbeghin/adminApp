import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() item;

  constructor() {
  }

  ngOnInit() {
    this.item.isTreeview = this.item.children && Array.isArray(this.item.children) && this.item.children.length > 0;
  }
}
