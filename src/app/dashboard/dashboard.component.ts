import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  badgeList: [any] = [
    {
      icon: "fa fa-users",
      title: "Users",
      data: "5",
      classColor: "primary"
    },
    {
      icon: "fa fa-dashboard",
      title: "Un test",
      data: "OK",
      classColor: "warning"
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
