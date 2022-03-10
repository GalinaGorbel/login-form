import {
  state,
  style,
  trigger,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { BrowserInfoService } from './browser-info.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('divState', [
      state(
        'normal',
        style({
          transition: '0.5s all ease',
          transform: 'translateX(100%)',
        })
      ),
      state(
        'transform',
        style({
          transition: '0.5s all ease',
          transform: 'translateX(0)',
        })
      ),
    ]),
  ],
})
export class AppComponent implements OnInit {
  title = 'login-form';
  state = 'normal';
  public showSignUp = true;
  readonly isWebBrowser = !this.browserInfo.isMobile();

  constructor(private browserInfo: BrowserInfoService) {}

  ngOnInit(): void {
    console.log(this.isWebBrowser)
  }
}
