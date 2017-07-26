import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

import { Project, Client, ClientId, ProjectStatus } from './projects.model';

@Injectable()
export class ProjectsService {
  public getClients() {
    return firebase.database().ref("clients/");
  }

  public getProjects() {
    return firebase.database().ref("projects/");
  }

  public getProjectsByClient(clientId: number) {
    return firebase.database().ref("projects/").orderByChild("clientGroup").equalTo(+clientId);
  }

  public addProject(project: Project) {
    return firebase.database().ref("projects/").push(project);
  }

  public updateProjectStatus(project: Project) {
    firebase.database().ref().child('/projects/' + project.id).update({deliveryStatus: project.deliveryStatus, budgetStatus: project.budgetStatus, resourceStatus: project.resourceStatus})
      .then()
      .catch(
        error => console.log(error)
      );
  }
}
