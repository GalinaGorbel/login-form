import { state, style, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Platform } from '@angular/cdk/platform';
import { DeviceDetectorService } from 'ngx-device-detector';
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
  curPlatform = this.currentPlatform();
  navPlatform = window.navigator.platform;
  detector = this.deviceService.isDesktop()
  isMobile = this.deviceService.isMobile()

  constructor(private platform: Platform, private deviceService: DeviceDetectorService) {}

  ngOnInit(): void {}

  currentPlatform(): any {
    if (this.platform.ANDROID) {
      return 'ANDROID';
    } else if (this.platform.IOS) {
      return 'IOS';
    }
  }
}
