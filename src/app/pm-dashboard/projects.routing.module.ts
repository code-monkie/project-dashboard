import { NgModule } from  '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientsComponent } from './clients/clients.component';
import { ProjectInputComponent } from './projects/project-input/project-input.component';
import { ClientComponent } from './projects/client.component';
import { AuthGuard } from '../auth/auth-guard.service'


const dashboardRoutes : Routes = [
  { path: "clients", component: ClientsComponent, canActivate: [AuthGuard]},
  { path: "client/:clientId", component: ClientComponent, canActivate: [AuthGuard]},
  { path: "new", component: ProjectInputComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(dashboardRoutes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule {};