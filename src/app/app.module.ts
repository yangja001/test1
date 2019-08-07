import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Test2Component } from './test2/test2.component';
import { LoginComponent } from './login/login.component';
import { AddDeviceComponent } from './add-device/add-device.component';
import { MenegeComponent } from './menege/menege.component';

@NgModule({
  declarations: [
    AppComponent,
    Test2Component,
    LoginComponent,
    AddDeviceComponent,
    MenegeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
