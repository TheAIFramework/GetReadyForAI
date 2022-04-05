import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { ReactiveFormsModule } from "@angular/forms";


@NgModule({
  declarations: [
    LandingComponent,
    UserInfoComponent
  ],
  imports: [
    CommonModule,
    LandingRoutingModule,
    ReactiveFormsModule
  ]
})
export class LandingModule {
}
