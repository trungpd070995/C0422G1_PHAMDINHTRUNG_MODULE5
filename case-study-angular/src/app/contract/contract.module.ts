import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContractRoutingModule } from './contract-routing.module';
import { ContractListComponent } from './contract-list/contract-list.component';


@NgModule({
    declarations: [ContractListComponent],
    exports: [
        ContractListComponent
    ],
    imports: [
        CommonModule,
        ContractRoutingModule
    ]
})
export class ContractModule { }
