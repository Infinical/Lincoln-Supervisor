import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SupervisorComponent } from './pages/supervisor/supervisor.component';


const routes: Routes = [
  {path: '', loadChildren: () => import('./pages/supervisor/supervisor.module').then(mod => mod.SupervisorModule)}
  // {path: '', component: SupervisorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
