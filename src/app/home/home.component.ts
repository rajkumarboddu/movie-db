import { Component, OnDestroy, OnInit } from '@angular/core';
import { Movie } from '../movie/movie.model';
import { MovieService } from '../movie/movie.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  movies: Movie[];
  private movieChangesSubscription = new Subscription();

  constructor(private movieService: MovieService) {}

  ngOnInit() {
    this.movies = this.movieService.getMovies();
    this.movieChangesSubscription = this.movieService.moviesChanged
      .subscribe(
        (movies: Movie[]) => {
          this.movies = movies;
        }
      );
  }

  ngOnDestroy() {
    this.movieChangesSubscription.unsubscribe();
  }

}
