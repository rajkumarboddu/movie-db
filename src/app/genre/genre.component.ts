import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Store } from '@ngrx/store';

import { Movie } from '../movie/movie.model';
import * as fromApp from '../store/app.reducers';
import * as fromMovie from '../movie/store/movie.reducers';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css']
})
export class GenreComponent implements OnInit {
  genreName: string;
  movies: Movie[];


  constructor(private store: Store<fromApp.AppState>, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.genreName = params['genreName'];
        this.store.select('movies').subscribe(
          (moviesState: fromMovie.State) => {
            this.movies = moviesState.movies;
          }
        )
      }
    )
  }

}
