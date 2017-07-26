export interface Project{
    id: string;
    clientGroup?: ClientId,
    clientName: string,
    projectName: string;
    resourceStatus: ProjectStatus;
    budgetStatus: ProjectStatus;
    deliveryStatus: ProjectStatus;
    sowStart: string;
    sowEnd: string;
    projectLead: string;
    deliveryExec: string;
    salesRep: string;
    projectObjective: string;
    imageUrl: string;
    activeRisks: string[];
    notableWins: string[];
    salesOpportunities: string[];
    numberOfResources: number;
    leverage: number;
    teamNotes: string;
    currentMonth: string;
    grandTotal: number;
    backlogPullthrough: number;
    invoicePerDay: number;
    prevMonth: string;
    prevGrandTotal: number;
    prevBacklogPullthrough: number;
    prevInvoicePerDay: number;
}

export interface Client {
    clientId: ClientId,
    name: string,
    imageUrl: string,
    inDanger?: boolean
}

export enum ProjectStatus{
    Green = 1,
    Yellow,
    Red
}

export enum ClientId{
    Dentaquest = 1,
    Enterprise,
    Phizer,
    Dollex,
    Clayton,
    HCA    
}