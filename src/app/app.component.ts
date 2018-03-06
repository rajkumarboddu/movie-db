import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';

  constructor() {}

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyAH8NcGv0b4Pf3-Kxfmivl7xSQNJQOTCXQ",
      authDomain: "movie-db-92f01.firebaseapp.com"
    });
  }

}
