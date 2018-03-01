import { Http, Response } from '@angular/http';
import { MovieService } from '../movie/movie.service';
import { Injectable } from '@angular/core';
import { Movie } from '../movie/movie.model';

@Injectable()
export class DataService {

  constructor(private http: Http, private movieService: MovieService) {}

  saveMovies() {
    return this.http.put("https://movie-db-92f01.firebaseio.com/movies.json", this.movieService.getMovies());
  }

  getMovies() {
    this.http.get("https://movie-db-92f01.firebaseio.com/movies.json")
      .subscribe(
        (response: Response) => {
          const movies: Movie[] = response.json();
          this.movieService.setMovies(movies);
        }
      );
  }

}
