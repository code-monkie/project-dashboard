import { Injectable } from '@angular/core';

const apiKey: string  = "";
const authDomain: string = "";
const databaseURL: string = "";

@Injectable()
export class ConstantsService {

  constructor() { }

  public getFirebaseApiKey() {
    return apiKey;
  }

  public getFirebaseAuthDomain() {
    return authDomain;
  }

  public getFirebaseDatabaseURL() {
    return databaseURL;
  }
}
