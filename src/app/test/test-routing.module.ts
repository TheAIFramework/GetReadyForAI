import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './test.component';
import { AnswersGuard } from "@shared/guards/answers.guard";

const routes: Routes = [{ path: '', component: TestComponent },
  { path: 'result', canActivate: [AnswersGuard], loadChildren: () => import('./result/result.module').then(m => m.ResultModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestRoutingModule {
}
