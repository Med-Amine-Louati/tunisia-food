import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HbjComponent } from './hbj/hbj.component';

const routes: Routes = [
  { path: "hbj", component: HbjComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
