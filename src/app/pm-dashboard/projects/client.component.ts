import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";

import { ProjectsService } from '../projects.service';
import { Project } from '../projects.model';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  projects: Project[];
  loading: boolean = true;


  constructor(private projectsService: ProjectsService, private route: ActivatedRoute) { }

  public ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.projectsService.getProjectsByClient(params["clientId"]).on("value",
          snapshot => {
            this.projects = [];
            for (var name in snapshot.val()) {
              let project: Project = snapshot.val()[name];
              project.id = name;
              this.projects.push(project);
            }
            this.loading = false;
          }
        )
      }
    );
  }
}
