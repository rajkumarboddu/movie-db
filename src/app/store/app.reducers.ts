import {ActionReducerMap} from '@ngrx/store';

import * as fromAuth from '../auth/store/auth.reducers';
import * as fromMovies from '../movie/store/movie.reducers';
import * as fromWatchList from '../watch-list/store/watch-list.reducers';

export interface AppState{
  auth: fromAuth.State,
  movies: fromMovies.State,
  watchList: fromWatchList.State
}

export const appReducers: ActionReducerMap<AppState> = {
  auth: fromAuth.authReducers,
  movies: fromMovies.movieReducers,
  watchList: fromWatchList.watchListReducers
};
