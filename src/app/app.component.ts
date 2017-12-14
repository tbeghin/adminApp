import { Component } from '@angular/core';
import { FacebookService, InitParams } from 'ngx-facebook';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private fb: FacebookService) {
    const params: InitParams = {
      appId: '153260175286885',
      xfbml: true,
      version: 'v2.11'
    };
    fb.init(params);
  }
}
