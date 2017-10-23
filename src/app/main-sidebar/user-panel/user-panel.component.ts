import {Component, OnInit, Input} from '@angular/core';
import {User} from '../../models/user';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.css']
})
export class UserPanelComponent implements OnInit {
  @Input() user: User;

  constructor() {
  }

  ngOnInit() {
  }

}
