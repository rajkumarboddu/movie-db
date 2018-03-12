import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, Params} from '@angular/router';
import { Location } from '@angular/common';
import { Store } from '@ngrx/store';

import { MovieService } from '../movie.service';
import { Movie } from '../movie.model';
import * as fromAuth from '../../auth/store/auth.reducers';
import * as fromApp from '../../store/app.reducers';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  id: number;
  movie: Movie;
  authState: Observable<fromAuth.State>;

  constructor(private movieService: MovieService,
              private route: ActivatedRoute,
              private location: Location,
              private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.movie = this.movieService.getMovie(this.id);
      }
    );
    this.movieService.moviesChanged
      .subscribe(
        () => {
          this.movie = this.movieService.getMovie(this.id);
        }
      );
    this.authState = this.store.select('auth');
  }

  onDelete() {
    this.movieService.deleteMovie(this.id);
    this.movieService.moviesChanged.next(this.movieService.getMovies());
    this.location.back();
  }

  onAddToWatchList() {
    this.movieService.addToWatchList(this.id);
  }

  getMovieGenresString() {
    return this.movieService.getMovieGenresString(this.id);
  }

}
