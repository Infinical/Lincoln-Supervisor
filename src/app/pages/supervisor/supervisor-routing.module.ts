import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SupervisorComponent } from "./supervisor.component";

const routes: Routes = [
  {
    path: "",
    component: SupervisorComponent
  },
  {
    path: "dashboard",
    loadChildren: () =>
      import("./dashboard/dashboard.module").then(mod => mod.DashboardModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupervisorRoutingModule {}
