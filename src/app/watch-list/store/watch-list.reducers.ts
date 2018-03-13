import {Movie} from '../../movie/movie.model';
import * as fromWatchListActions from './watch-list.actions';

export interface State {
  wMovies: Movie[];
}

export const initialState: State = {
  wMovies: []
};

export function watchListReducers(state = initialState, action: fromWatchListActions.WatchListActions) {
  switch (action.type) {
    case (fromWatchListActions.ADD_TO_WATCHLIST):
      return {
        ...state,
        wMovies: [...state.wMovies, action.payload]
      };
    case (fromWatchListActions.REMOVE_FROM_WATCHLIST):
      const newWmovies = [...state.wMovies];
      newWmovies.splice(action.payload, 1);
      return {
        ...state,
        wMovies: newWmovies
      };
    default:
      return state;
  }
}

