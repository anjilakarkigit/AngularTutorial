import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { RegisterComponent } from './register.component';
import { LoginComponent } from './login.component';


@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule
  ],
  exports:[
    LoginComponent,
    RegisterComponent
  ]
})
export class AccountModule { }
