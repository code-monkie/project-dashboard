import { Component, Input } from '@angular/core';
import { Project, ProjectStatus} from '../../projects.model';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent {
  @Input() project = null as Project;
  @Input() startExpanded = null as boolean;
}
