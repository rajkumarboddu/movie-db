import {Action} from '@ngrx/store';
import {Movie} from '../../movie/movie.model';

export const ADD_TO_WATCHLIST = 'ADD_TO_WATCHLIST';
export const REMOVE_FROM_WATCHLIST = 'REMOVE_FROM_WATCHLIST';

export class AddToWatchlist implements Action {
  readonly type = ADD_TO_WATCHLIST;

  constructor(public payload: Movie) {}
}

export class RemoveFromWatchlist implements Action {
  readonly type = REMOVE_FROM_WATCHLIST;

  constructor(public payload: number) {}
}

export type WatchListActions = AddToWatchlist | RemoveFromWatchlist;
