import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { ActivatedRoute, Params} from '@angular/router';
import { Movie } from '../movie.model';
import { Location } from '@angular/common';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  id: number;
  movie: Movie;

  constructor(private movieService: MovieService,
              private route: ActivatedRoute,
              private location: Location,
              private authService: AuthService) { }

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
      )
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
