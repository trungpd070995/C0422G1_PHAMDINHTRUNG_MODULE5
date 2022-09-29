import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import {FacilityRoutingModule} from "./facility/facility-routing.module";
import {ContractModule} from "./contract/contract.module";
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FacilityRoutingModule,
    ContractModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
