import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './test.component';

const routes: Routes = [{ path: '', component: TestComponent }, { path: 'result', loadChildren: () => import('./result/result.module').then(m => m.ResultModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestRoutingModule { }
