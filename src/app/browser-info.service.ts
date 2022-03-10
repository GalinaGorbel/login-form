import { Injectable } from '@angular/core';
import { Platform } from '@angular/cdk/platform';

@Injectable({
  providedIn: 'root',
})
export class BrowserInfoService {
  constructor(private platform: Platform) {}

  isMobile(): boolean {
    var checkMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (checkMobile) {
      return true;
    } else {
      return false;
    }
  }
}
