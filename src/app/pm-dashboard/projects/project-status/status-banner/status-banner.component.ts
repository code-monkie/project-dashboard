import { Component, Input } from '@angular/core';
import { Project, ProjectStatus} from '../../../projects.model';

@Component({
  selector: 'app-status-banner',
  templateUrl: './status-banner.component.html',
  styleUrls: ['./status-banner.component.css']
})
export class StatusBannerComponent {
  @Input() project = null as Project;
}
