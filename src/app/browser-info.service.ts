import { Injectable } from '@angular/core';
import { Platform } from '@angular/cdk/platform';

@Injectable({
  providedIn: 'root',
})
export class BrowserInfoService {
  constructor(private platform: Platform) {}

  isMobile(): boolean {
    return this.platform.ANDROID || this.platform.IOS || (window.innerWidth >= 320 && window.innerWidth <= 768);
  }
}
