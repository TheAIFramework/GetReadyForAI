import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', loadChildren: () => import('./landing/landing.module').then(m => m.LandingModule) }, { path: 'test', loadChildren: () => import('./test/test.module').then(m => m.TestModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
