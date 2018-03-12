import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';

import { Movie } from '../../movie/movie.model';
import { MovieService } from '../../movie/movie.service';
import * as fromApp from '../../store/app.reducers';
import * as fromAuth from '../../auth/store/auth.reducers';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  movies: Movie[];
  private movieChangesSubscription = new Subscription();
  authState: Observable<fromAuth.State>;

  constructor(private movieService: MovieService, private store: Store<fromApp.AppState>) {}

  ngOnInit() {
    this.movies = this.movieService.getMovies();
    this.movieChangesSubscription = this.movieService.moviesChanged
      .subscribe(
        (movies: Movie[]) => {
          this.movies = movies;
        }
      );
    this.authState = this.store.select('auth');
  }

  ngOnDestroy() {
    this.movieChangesSubscription.unsubscribe();
  }

}
