import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginFormComponent } from './forms/login-form/login-form.component';
import { SignUpFormComponent } from './forms/sign-up-form/sign-up-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    SignUpFormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
