import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";
import { GoogleTagManagerModule } from "angular-google-tag-manager";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    GoogleTagManagerModule.forRoot({
      id: 'G-FD9PXZ4KPC',
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
