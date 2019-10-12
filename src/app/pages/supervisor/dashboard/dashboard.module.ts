import { NgModule } from '@angular/core';
import { ClarityModule, ClrIconModule } from '@clr/angular';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';


@NgModule({
    imports: [DashboardRoutingModule,CommonModule,ClarityModule,ClrIconModule],
    declarations:[DashboardComponent]
})

export class DashboardModule {}