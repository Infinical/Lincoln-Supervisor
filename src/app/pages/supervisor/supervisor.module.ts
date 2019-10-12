import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupervisorRoutingModule } from './supervisor-routing.module';
import { ClarityModule, ClrIconModule } from '@clr/angular';
import { SupervisorComponent } from './supervisor.component';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
    imports: [CommonModule,SupervisorRoutingModule,ClarityModule,ClrIconModule],
    declarations: [SupervisorComponent]
})

export class SupervisorModule {}