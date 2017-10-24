import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-information-badge',
  templateUrl: './information-badge.component.html',
  styleUrls: ['./information-badge.component.css']
})
export class InformationBadgeComponent implements OnInit {
  @Input() data: any;

  constructor() {
  }

  ngOnInit() {
  }

}
