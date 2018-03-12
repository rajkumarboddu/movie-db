import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import {Store} from '@ngrx/store';

import * as fromApp from './store/app.reducers';
import * as fromMovieActions from './movie/store/movie.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';

  constructor(private store: Store<fromApp.AppState>) {}

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyAH8NcGv0b4Pf3-Kxfmivl7xSQNJQOTCXQ",
      authDomain: "movie-db-92f01.firebaseapp.com"
    });

    this.store.dispatch(new fromMovieActions.TryGettingMovies());

  }

}
