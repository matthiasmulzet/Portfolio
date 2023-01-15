import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { ImprintComponent } from './imprint/imprint.component';
import { WholePageComponent } from './whole-page/whole-page.component';

const routes: Routes = [
  { path: '', component: WholePageComponent },
  { path: 'imprint', component: ImprintComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(public router: Router) { }
}
