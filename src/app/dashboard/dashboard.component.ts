import {Component} from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  badgeList: [any] = [
    {
      icon: "group",
      title: "Users",
      data: "5",
      classColor: "primary"
    },
    {
      icon: "dashboard",
      title: "Un test",
      data: "OK",
      classColor: "warning"
    }
  ];

  constructor() {
  }
}
