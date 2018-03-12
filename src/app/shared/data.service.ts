import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { MovieService } from '../movie/movie.service';
import { Movie } from '../movie/movie.model';
import * as fromAuth from '../auth/store/auth.reducers';
import * as fromApp from '../store/app.reducers';

@Injectable()
export class DataService{
  movies: Movie[];
  token: string;

  constructor(private http: Http,
              private movieService: MovieService,
              private store: Store<fromApp.AppState>) {
    this.store.select('auth').subscribe(
      (state: fromAuth.State) => {
        this.token = state.token;
      }
    );
  }

  saveMovies() {
    return this.http.put("https://movie-db-92f01.firebaseio.com/movies.json?auth=" + this.token, this.movieService.getMovies());
  }

  getMovies(resolve) {
    this.http.get("https://movie-db-92f01.firebaseio.com/movies.json")
      .subscribe(
        (response: Response) => {
          resolve(response.json());
        }
      );
  }

}
