import {ActionReducerMap} from '@ngrx/store';

import * as fromAuth from '../auth/store/auth.reducers';
import * as fromMovies from '../movie/store/movie.reducers';

export interface AppState{
  auth: fromAuth.State,
  movies: fromMovies.State
}

export const appReducers: ActionReducerMap<AppState> = {
  auth: fromAuth.authReducers,
  movies: fromMovies.movieReducers
};
