import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";

import {AppRouterModule} from "./app-router/app-router.module";
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RdclistComponent } from './rdclist/rdclist.component';
import { RentlistComponent } from './rentlist/rentlist.component';
import { PartnerComponent } from './partner/partner.component';
import { CommonComponent } from './common/common.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RdclistComponent,
    RentlistComponent,
    PartnerComponent,
    CommonComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
