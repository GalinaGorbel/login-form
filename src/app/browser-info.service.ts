import { Injectable } from '@angular/core';
import { Platform } from '@angular/cdk/platform';

@Injectable({
  providedIn: 'root',
})
export class BrowserInfoService {
  constructor(private platform: Platform) {}

  isMobile(): boolean {
    let platform = window.navigator.platform.toLowerCase();
    return !!platform.indexOf('win');
  }
}
