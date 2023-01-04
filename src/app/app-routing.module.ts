import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WholePageComponent } from './whole-page/whole-page.component';

const routes: Routes = [
  { path: '', component: WholePageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
