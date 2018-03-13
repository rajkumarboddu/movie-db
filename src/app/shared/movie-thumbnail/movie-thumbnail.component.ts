import { Component, Input, OnInit} from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { Movie } from '../../movie/movie.model';
import { MovieService } from '../../movie/movie.service';
import * as fromAuth from '../../auth/store/auth.reducers';
import * as fromApp from '../../store/app.reducers';
import * as fromMovieActions from '../../movie/store/movie.actions';
import * as fromMovie from '../../movie/store/movie.reducers';
import * as fromWatchListActions from '../../watch-list/store/watch-list.actions';

@Component({
  selector: 'app-movie-thumbnail',
  templateUrl: './movie-thumbnail.component.html',
  styleUrls: ['./movie-thumbnail.component.css']
})
export class MovieThumbnailComponent implements OnInit {
  @Input() movie: Movie;
  @Input() movieIndex: number;
  @Input() pageName: string;
  watchListIndex: number;
  genreString: string;
  authState: Observable<fromAuth.State>;

  constructor(private movieService: MovieService,
              private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.watchListIndex = this.movieService.getWatchListIndex(this.movieIndex);
    this.authState = this.store.select('auth');
    this.genreString = this.movieService.getMovieGenresString(this.movie);
  }

  onAddToWatchList(index: number){
    this.store.select('movies').take(1)
      .subscribe(
        (moviesState: fromMovie.State) => {
          const movie = moviesState.movies[index];
          this.store.dispatch(new fromWatchListActions.AddToWatchlist(movie));
          this.watchListIndex = this.movieService.getWatchListIndex(index);
          console.log(this.watchListIndex);
        }
      );
  }

  onRemoveFromWatchList(){
    this.store.dispatch(new fromWatchListActions.RemoveFromWatchlist(this.movieIndex));
    this.watchListIndex = -1;
  }

  onDeleteMovie(index: number) {
    const watchListIndex = this.movieService.getWatchListIndex(index);
    if(watchListIndex !== -1){
      this.store.dispatch(new fromWatchListActions.RemoveFromWatchlist(watchListIndex));
    }
    this.store.dispatch(new fromMovieActions.DeleteMovie(index));
  }

}
