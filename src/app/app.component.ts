import { Component, OnInit } from '@angular/core';
import { DataService } from './shared/data.service';
import { MovieService } from './movie/movie.service';
import * as firebase from 'firebase';
import {Movie} from './movie/movie.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';

  constructor(private dataService: DataService, private movieService: MovieService) {}

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyAH8NcGv0b4Pf3-Kxfmivl7xSQNJQOTCXQ",
      authDomain: "movie-db-92f01.firebaseapp.com"
    });

    new Promise((resolve, reject) => {
      this.dataService.getMovies(resolve);
    })
    .then(
      (movies: Movie[]) => {
        this.movieService.setMovies(movies);
      }
    );
  }

}
