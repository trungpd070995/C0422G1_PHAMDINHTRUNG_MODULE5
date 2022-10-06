import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import {FacilityRoutingModule} from "./facility/facility-routing.module";
import {ContractModule} from "./contract/contract.module";
import { HomeComponent } from './home/home.component';
import {CustomerModule} from "./customer/customer.module";
import {HttpClientModule} from "@angular/common/http";
import {EmployeeModule} from "./employee/employee.module";
import {ReactiveFormsModule} from "@angular/forms";


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
    CustomerModule,
    EmployeeModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
