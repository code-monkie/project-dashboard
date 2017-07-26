import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../projects.service';
import { Client } from '../projects.model';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  clients: Client[];
  loading: boolean = true;

  constructor(private projectsService: ProjectsService) { }

  public ngOnInit() {
    this.projectsService.getClients().on("value", 
    snapshot => {
      this.clients = [];
      this.clients = [];
          for (var name in snapshot.val()) {
            let project: Client = snapshot.val()[name];
            this.clients.push(project);
          }
          this.loading = false;
    });
  }
}
