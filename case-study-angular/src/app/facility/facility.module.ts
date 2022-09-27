import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacilityRoutingModule } from './facility-routing.module';
import { FacilityListComponent } from './facility-list/facility-list.component';
import { FacilityEditComponent } from './facility-edit/facility-edit.component';
import { FacilityCreateComponent } from './facility-create/facility-create.component';


@NgModule({
    declarations: [FacilityListComponent, FacilityEditComponent, FacilityCreateComponent],
    exports: [
        FacilityListComponent
    ],
    imports: [
        CommonModule,
        FacilityRoutingModule
    ]
})
export class FacilityModule { }
