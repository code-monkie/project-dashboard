import { NgModule } from  '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ClientsComponent } from './pm-dashboard/clients/clients.component';
import { ProjectInputComponent } from './pm-dashboard/projects/project-input/project-input.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ClientComponent } from './pm-dashboard/projects/client.component';
import { AuthGuard } from './auth/auth-guard.service'


const appRoutes : Routes = [
  { path: "", component: LandingPageComponent, pathMatch: 'full'},
  { path: "dashboard", loadChildren: "./pm-dashboard/projects.module#ProjectsModule"},
  { path: "auth", loadChildren: "./auth/auth.module#AuthModule"},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {};