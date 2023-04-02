import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Public/home.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  { path: "Account", loadChildren: () => import("./Account/account.module").then(mod => mod.AccountModule) },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
