import { Component, Input } from '@angular/core';
import { Project } from '../../../projects.model';

@Component({
  selector: 'app-account-financials',
  templateUrl: './account-financials.component.html',
  styleUrls: ['./account-financials.component.css']
})
export class AccountFinancialsComponent {
  @Input() project = null as Project;
}
