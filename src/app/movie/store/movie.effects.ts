import {Actions, Effect} from '@ngrx/effects';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Store} from '@ngrx/store';

import * as fromMovieActions from './movie.actions';
import {Movie} from '../movie.model';
import * as fromApp from '../../store/app.reducers';
import * as fromAuth from '../../auth/store/auth.reducers';
import * as fromMovie from './movie.reducers';

@Injectable()
export class MovieEffects {
  constructor(private actions$: Actions,
              private httpClient: HttpClient,
              private store: Store<fromApp.AppState>) {}

  @Effect()
  getMoviesEffect = this.actions$
    .ofType(fromMovieActions.TRY_GETTING_MOVIES)
    .switchMap((action: fromMovieActions.TryGettingMovies) => {
      return this.httpClient.get<Movie[]>("https://movie-db-92f01.firebaseio.com/movies.json");
    })
    .map((movies: Movie[]) => {
      return {
        type: fromMovieActions.SET_MOVIES,
        payload: movies
      }
    });

  @Effect({dispatch: false})
  saveMoviesEffect = this.actions$
    .ofType(fromMovieActions.SAVE_MOVIES)
    .switchMap((action: fromMovieActions.SaveMovies) => {
      let token;
      this.store.select('auth').take(1)
        .subscribe((authState: fromAuth.State) => {
          token = authState.token;
        });
      let movies;
      this.store.select('movies').take(1)
        .subscribe((moviesState: fromMovie.State) => {
          movies = moviesState.movies;
        });
      return this.httpClient.put("https://movie-db-92f01.firebaseio.com/movies.json?auth="+token, movies);
    })
}
