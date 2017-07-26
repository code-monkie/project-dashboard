import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ProjectStatusComponent } from './projects/project-status/project-status/project-status.component';
import { StatusBannerComponent } from './projects/project-status/status-banner/status-banner.component';
import { ResourcesComponent } from './projects/project-status/resources/resources.component';
import { AccountFinancialsComponent } from './projects/project-status/account-financials/account-financials.component';
import { ClientComponent } from './projects/client.component';
import { StatusIndicatorComponent } from './projects/project-status/status-banner/status-indicator/status-indicator.component';
import { ProjectInputComponent } from './projects/project-input/project-input.component';
import { ClientsComponent } from './clients/clients.component';
import { ProjectCardComponent } from './projects/project-status/project-card.component';
import { ProjectsRoutingModule } from './projects.routing.module';

@NgModule({
  declarations: [
    ClientsComponent,
    ProjectCardComponent,
    ProjectInputComponent,
    ProjectStatusComponent,
    StatusBannerComponent,
    ResourcesComponent,
    AccountFinancialsComponent,
    ClientComponent,
    StatusIndicatorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ProjectsRoutingModule,
    NgbModule.forRoot()
  ]
})
export class ProjectsModule { }
