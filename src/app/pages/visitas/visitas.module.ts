import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VisitasRoutingModule } from './visitas-routing.module';
import { ActualVisitaComponent } from './actual-visita/actual-visita.component';
import { NbCardModule, NbTreeGridModule } from '@nebular/theme';

@NgModule({
    declarations: [
        ActualVisitaComponent,
    ],
    imports: [
        CommonModule,
        VisitasRoutingModule,
        NbCardModule,
        NbTreeGridModule,
    ]
})
export class VisitasModule { }