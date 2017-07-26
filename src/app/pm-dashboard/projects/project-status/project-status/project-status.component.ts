import { Component, Input } from '@angular/core';
import { Project, ProjectStatus} from '../../../projects.model'

@Component({
  selector: 'app-project-status',
  templateUrl: './project-status.component.html',
  styleUrls: ['./project-status.component.css']
})
export class ProjectStatusComponent {
  @Input() project = null as Project;
}
