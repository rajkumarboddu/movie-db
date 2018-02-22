import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../movie/movie.model';
import { MovieService } from '../movie/movie.service';
import {Subject} from 'rxjs/Subject';

@Component({
  selector: 'app-movie-thumbnail',
  templateUrl: './movie-thumbnail.component.html',
  styleUrls: ['./movie-thumbnail.component.css']
})
export class MovieThumbnailComponent implements OnInit {
  @Input() movie: Movie;
  @Input() movieIndex: number;

  constructor(private movieService: MovieService) { }

  ngOnInit() {
  }

  onToggleFromWatchList(index){
    this.movieService.toggleFromWatchList(index);
    this.movieService.watchListChanged.next(this.movieService.getWatchList());

  }

  onDeleteMovie(index) {
    this.movieService.deleteMovie(index);
    this.movieService.watchListChanged.next(this.movieService.getWatchList());
    this.movieService.moviesChanged.next(this.movieService.getMovies());
  }

}
