import { Http, Response } from '@angular/http';
import { MovieService } from '../movie/movie.service';
import { Injectable } from '@angular/core';
import { Movie } from '../movie/movie.model';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class DataService {
  movies: Movie[];

  constructor(private http: Http,
              private movieService: MovieService,
              private authService: AuthService) {}

  saveMovies() {
    return this.http.put("https://movie-db-92f01.firebaseio.com/movies.json?auth=" + this.authService.getToken(), this.movieService.getMovies());
  }

  getMovies(resolve) {
    this.http.get("https://movie-db-92f01.firebaseio.com/movies.json")
      .subscribe(
        (response: Response) => {
          resolve(response.json());
        }
      );
  }

}
