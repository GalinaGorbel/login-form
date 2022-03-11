import { Injectable } from '@angular/core';
import { Platform } from '@angular/cdk/platform';

@Injectable({
  providedIn: 'root',
})
export class BrowserInfoService {
  constructor(private platform: Platform) {}

  isMobile(): boolean {
    return this.platform.ANDROID || this.platform.IOS;
  }

  isMobileByJs(): boolean {
    if (
      navigator.userAgent.match(/webOS/i) ||
      navigator.userAgent.match(/Android/i)
    ) {
      return true;
    } else {
      return false;
    }
  }
}
