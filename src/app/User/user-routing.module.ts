import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicatinStatusComponent } from './applicatin-status.component';

const routes: Routes = [
  { path: 'ApplicationStatus', component: ApplicatinStatusComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
