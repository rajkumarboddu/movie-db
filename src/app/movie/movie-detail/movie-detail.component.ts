import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, Params} from '@angular/router';
import { Location } from '@angular/common';
import { Store } from '@ngrx/store';

import { MovieService } from '../movie.service';
import { Movie } from '../movie.model';
import * as fromAuth from '../../auth/store/auth.reducers';
import * as fromApp from '../../store/app.reducers';
import * as fromMovie from '../store/movie.reducers';
import * as fromMovieActions from '../store/movie.actions';
import * as fromWatchListActions from '../../watch-list/store/watch-list.actions';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  id: number;
  movie: Movie;
  genreString: string;
  authState: Observable<fromAuth.State>;

  constructor(private movieService: MovieService,
              private route: ActivatedRoute,
              private location: Location,
              private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.store.select('movies')
          .subscribe(
            (moviesState: fromMovie.State) => {
              this.movie = moviesState.movies[this.id];
              if(this.movie){
                this.genreString = this.movieService.getMovieGenresString(this.movie);
              }
            }
          );
      }
    );
    this.authState = this.store.select('auth');
  }

  onDelete() {
    this.store.dispatch(new fromMovieActions.DeleteMovie(this.id));
    this.location.back();
  }

  onAddToWatchList() {
    this.store.select('movies').take(1)
      .subscribe(
        (moviesState: fromMovie.State) => {
          this.store.dispatch(new fromWatchListActions.AddToWatchlist(moviesState.movies[this.id]));
        }
      );
  }

}
