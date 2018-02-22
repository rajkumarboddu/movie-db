import {Component, OnDestroy, OnInit} from '@angular/core';
import { MovieService } from '../movie/movie.service';
import { Movie } from '../movie/movie.model';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-watch-list',
  templateUrl: './watch-list.component.html',
  styleUrls: ['./watch-list.component.css']
})
export class WatchListComponent implements OnInit, OnDestroy {
  movies: Movie[];
  private movieListSubscription: Subscription;

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.movies = this.movieService.getWatchList();
    this.movieListSubscription = this.movieService.watchListChanged
      .subscribe(
        (movies: Movie[]) =>  {
          this.movies = movies;
        }
      )
  }

  ngOnDestroy() {
    this.movieListSubscription.unsubscribe();
  }

}
