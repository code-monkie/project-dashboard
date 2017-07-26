import { Component, Input } from '@angular/core';

import { Project, ProjectStatus} from '../../../../projects.model';
import { ProjectsService } from '../../../../projects.service';

@Component({
  selector: 'app-status-indicator',
  templateUrl: './status-indicator.component.html',
  styleUrls: ['./status-indicator.component.css']
})
export class StatusIndicatorComponent {
  @Input() status = undefined as ProjectStatus;
  @Input() statusType = undefined as string;
  @Input() project = undefined as Project;

  constructor (private projectService: ProjectsService) {
  }

  public setToGreen() {
    this.setStatus(ProjectStatus.Green);
  }

  public setToYellow() {
    this.setStatus(ProjectStatus.Yellow);
  }

  public setToRed() {
    return this.setStatus(ProjectStatus.Red);
  }

  public showRed() {
    return this.showStatus(ProjectStatus.Red);
  }

  public showYellow() {
    return this.showStatus(ProjectStatus.Yellow);
  }

  public showGreen() {
    return this.showStatus(ProjectStatus.Green);
  }

  private showStatus(status: ProjectStatus) {
    if ("Delivery" === this.statusType) {
      return this.project.deliveryStatus != status;
    } else if ("Resources" === this.statusType) {
      return this.project.resourceStatus != status;      
    } else if ("Budget" === this.statusType) {
      return this.project.budgetStatus != status;      
    }
  }

  private setStatus(status: ProjectStatus) {
    if ("Delivery" === this.statusType) {
      this.project.deliveryStatus = status;
    } else if ("Resources" === this.statusType) {
      this.project.resourceStatus = status;
    } else if ("Budget" === this.statusType) {
      this.project.budgetStatus = status;
    }

    this.projectService.updateProjectStatus(this.project);
  }
}