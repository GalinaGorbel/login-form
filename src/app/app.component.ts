import { state, style, trigger } from '@angular/animations';
import { Component } from '@angular/core';
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
export class AppComponent {
  title = 'login-form';
  state = 'normal';
  platform = navigator.appVersion.indexOf('Mac') != -1
  public showSignUp = true;
}
