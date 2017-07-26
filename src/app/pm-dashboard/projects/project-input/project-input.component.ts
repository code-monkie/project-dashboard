import { Component, ViewChild, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Project, ProjectStatus, Client } from '../../projects.model';
import { ProjectsService } from '../../projects.service';

@Component({
  selector: 'app-project-input',
  templateUrl: './project-input.component.html',
  styleUrls: ['./project-input.component.css']
})
export class ProjectInputComponent implements OnInit {
  @ViewChild('f') signupForm: NgForm;
  newProject: Project;
  clients: Client;
  loading: boolean = true;

  newRisk: string;
  activeRisks: string[] = [];
  newWin: string;
  notableWins: string[] = [];
  newOpportunity: string;
  salesOpportunities: string[] = [];

  constructor(private projectsService: ProjectsService) {
  }

  public ngOnInit() {
    this.resetNewProject();
    this.projectsService.getClients().on("value", 
      (snapshot) => {
        this.clients = snapshot.val();
        this.loading = false;
      });
  }

  public onSubmit() {
    this.newProject.clientGroup = this.getClientList()[this.signupForm.value.userData.client].clientId;
    this.newProject.clientName = this.getClientList()[this.signupForm.value.userData.client].name;
    this.newProject.imageUrl = this.getClientList()[this.signupForm.value.userData.client].imageUrl;
    this.newProject.projectName =  this.signupForm.value.userData.projectname;
    this.newProject.projectLead =  this.signupForm.value.userData.projectlead;
    this.newProject.deliveryExec =  this.signupForm.value.userData.deliveryexec;
    this.newProject.salesRep =  this.signupForm.value.userData.salesrep;
    this.newProject.sowStart =  this.signupForm.value.userData.startdate;
    this.newProject.sowEnd =  this.signupForm.value.userData.enddate;
    this.newProject.projectObjective =  this.signupForm.value.userData.projectobjective;

    this.newProject.currentMonth =  this.signupForm.value.userData.currentmonth;
    this.newProject.prevMonth =  this.signupForm.value.userData.previousmonth;
    this.newProject.grandTotal =  this.signupForm.value.userData.grandtotal;
    this.newProject.backlogPullthrough =  this.signupForm.value.userData.pullthrough;
    this.newProject.invoicePerDay =  this.signupForm.value.userData.invoiceperday;
    this.newProject.prevGrandTotal =  this.signupForm.value.userData.prevgrandtotal;
    this.newProject.prevBacklogPullthrough =  this.signupForm.value.userData.prevpullthrough;
    this.newProject.prevInvoicePerDay =  this.signupForm.value.userData.previnvoiceperday;

    this.newProject.numberOfResources =  this.signupForm.value.userData.resources;
    this.newProject.leverage =  this.signupForm.value.userData.leverage;
    this.newProject.teamNotes =  this.signupForm.value.userData.notes;

  

    this.newProject.activeRisks = this.activeRisks;
    this.newProject.notableWins = this.notableWins;
    this.newProject.salesOpportunities = this.salesOpportunities;

    this.projectsService.addProject(this.newProject).then(
     (snapshot) => {
        this.signupForm.reset();
        this.resetNewProject();
      }
    );
  }

  public addRisk() {
    if (this.newRisk != "") {
      this.activeRisks.push(this.newRisk);
      this.newRisk = "";
    }
  }

  public removeRisk(index: number) {
    this.activeRisks.splice(index, 1);
  }

  public addWin() {
    if (this.newWin != "") {
      this.notableWins.push(this.newWin);
      this.newWin = "";
    }
  }

  public removeWin(index: number) {
    this.notableWins.splice(index, 1);
  }

  public addOpportunity() {
    if (this.newOpportunity != "") {
      this.salesOpportunities.push(this.newOpportunity);
      this.newOpportunity = "";
    }
  }

  public removeOpportunity(index: number) {
    this.salesOpportunities.splice(index, 1);
  }

  public getClientList() {
   return this.clients;
  }

  private resetNewProject() {
    this.newProject = {
      id: "",
      clientName:"",
      projectName: "",
      deliveryStatus: ProjectStatus.Green,
      budgetStatus: ProjectStatus.Green,
      resourceStatus: ProjectStatus.Green,
      sowStart: "",
      sowEnd: "",
      projectLead: "",
      deliveryExec: "",
      salesRep: "",
      projectObjective: "",
      imageUrl:"",
      activeRisks: [],
      notableWins: [],
      salesOpportunities: [],
      numberOfResources: 0,
      leverage: 0.0,
      teamNotes: "",
      currentMonth: "",
      grandTotal: 0,
      backlogPullthrough: 0,
      invoicePerDay: 0,
      prevMonth: "",
      prevGrandTotal: 0,
      prevBacklogPullthrough: 0 ,
      prevInvoicePerDay: 0
    }
    this.activeRisks = [];
    this.newRisk = "";
    this.notableWins = [];
    this.newWin = "";
    this.salesOpportunities = [];
    this.newOpportunity = "";
  }
}
