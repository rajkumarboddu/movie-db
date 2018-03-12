import {Movie} from '../movie.model';
import * as fromMovieActions from './movie.actions';

export interface State {
  movies: Movie[]
}

const initialState: State = {
  movies: []
};

export function  movieReducers(state = initialState, action: fromMovieActions.MovieActions) {
  switch (action.type) {
    case (fromMovieActions.ADD_MOVIE):
      return {
        ...state,
        movies: [...state.movies, action.payload]
      };
    case (fromMovieActions.UPDATE_MOVIE):
      const movie = state.movies[action.payload.index];
      const updatedMovie = {...movie, ...action.payload.movie};
      const updatedMovies = [...state.movies];
      updatedMovies[action.payload.index] = updatedMovie;
      return {
        ...state,
        movies: updatedMovies
      };
    case (fromMovieActions.DELETE_MOVIE):
      return {
        ...state,
        movies: [...state.movies].splice(action.payload, 1)
      };
    case (fromMovieActions.SET_MOVIES):
      return {
        ...state,
        movies: [...action.payload]
      };
    default:
      return state;
  }
}
