import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResultRoutingModule } from './result-routing.module';
import { ResultComponent } from './result.component';
import { ResultSectionComponent } from './result-section/result-section.component';
import { ResourcesComponent } from './resources/resources.component';


@NgModule({
  declarations: [
    ResultComponent,
    ResultSectionComponent,
    ResourcesComponent
  ],
  imports: [
    CommonModule,
    ResultRoutingModule
  ]
})
export class ResultModule { }
