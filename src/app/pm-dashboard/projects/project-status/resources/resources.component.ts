import { Component, OnInit, Input } from '@angular/core';
import { Project, ProjectStatus} from '../../../projects.model';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent implements OnInit {
  @Input() project = null as Project;
  constructor() { }

  ngOnInit() {
  }

}
