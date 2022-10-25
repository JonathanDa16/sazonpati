import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import{ PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';

const routes: Routes =[
  {path: 'privacy-policy',component:PrivacyPolicyComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }
