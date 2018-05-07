import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes, RouterLinkActive} from "@angular/router";

import {CommonComponent} from "../common/common.component";
import {PartnerComponent} from "../partner/partner.component";
import {RentlistComponent} from "../rentlist/rentlist.component";
import {RdclistComponent} from "../rdclist/rdclist.component";
import {HomeComponent} from "../home/home.component";

const appRoutes: Routes=[
  {
    path:'home',
    component:HomeComponent
  },{
    path:'rdclist',
    component:RdclistComponent
  },{
    path:'rentlist',
    component:RentlistComponent
  },{
    path:'partner',
    component:PartnerComponent
  },{
    path:'**',
    component:CommonComponent
  }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports:[RouterModule],
  declarations: []
})
export class AppRouterModule { }


