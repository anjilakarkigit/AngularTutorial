import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { ApplicatinStatusComponent } from './applicatin-status.component';


@NgModule({
  declarations: [
    ApplicatinStatusComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
