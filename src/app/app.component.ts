import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

import { ConstantsService } from './constants.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private constantService: ConstantsService) {}

  public ngOnInit(){
    firebase.initializeApp({
      apiKey: this.constantService.getFirebaseApiKey(),
      authDomain: this.constantService.getFirebaseAuthDomain(),
      databaseURL: this.constantService.getFirebaseDatabaseURL()
    });
  }
}
