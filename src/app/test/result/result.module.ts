import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResultRoutingModule } from './result-routing.module';
import { ResultComponent } from './result.component';
import { ResultSectionComponent } from './result-section/result-section.component';


@NgModule({
  declarations: [
    ResultComponent,
    ResultSectionComponent
  ],
  imports: [
    CommonModule,
    ResultRoutingModule
  ]
})
export class ResultModule { }
