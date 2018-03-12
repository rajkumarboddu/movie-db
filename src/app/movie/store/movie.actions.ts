import {Action} from '@ngrx/store';
import {Movie} from '../movie.model';

export const TRY_GETTING_MOVIES = 'TRY_GETTING_MOVIES';
export const ADD_MOVIE = 'ADD_MOVIE';
export const UPDATE_MOVIE = 'UPDATE_MOVIE';
export const DELETE_MOVIE = 'DELETE_MOVIE';
export const SET_MOVIES = 'SET_MOVIES';
export const SAVE_MOVIES = 'SAVE_MOVIES';

export class AddMovie implements Action {
  readonly type = ADD_MOVIE;

  constructor(public payload: Movie) {}
}

export class TryGettingMovies implements Action {
  readonly type = TRY_GETTING_MOVIES;
}

export class SaveMovies implements Action {
  readonly type = SAVE_MOVIES;
}

export class UpdateMovie implements Action {
  readonly type = UPDATE_MOVIE;

  constructor(public payload: {index: number, movie: Movie}) {}
}

export class DeleteMovie implements Action {
  readonly type = DELETE_MOVIE;

  constructor(public payload: number) {}
}

export class SetMovies implements Action {
  readonly type = SET_MOVIES;

  constructor(public payload: Movie[]) {}
}

export type MovieActions = AddMovie | TryGettingMovies | UpdateMovie | DeleteMovie | SetMovies | SaveMovies;
