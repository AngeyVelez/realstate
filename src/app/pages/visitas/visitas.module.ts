import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VisitasRoutingModule } from './visitas-routing.module';
import { ActualVisitaComponent } from './actual-visita/actual-visita.component';

@NgModule({
    declarations: [
        ActualVisitaComponent,
    ],
    imports: [
        CommonModule,
        VisitasRoutingModule
    ]
})
export class VisitasModule { }