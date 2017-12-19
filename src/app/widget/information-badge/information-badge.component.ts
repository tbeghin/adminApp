import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-information-badge',
  templateUrl: './information-badge.component.html',
  styleUrls: ['./information-badge.component.css']
})
export class InformationBadgeComponent {
  @Input() data: any;

  constructor() {
  }
}
