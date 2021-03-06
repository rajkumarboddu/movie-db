import { Component, Input, OnInit} from '@angular/core';
import { Movie } from '../../movie/movie.model';
import { MovieService } from '../../movie/movie.service';
import { AuthService } from '../../auth/auth.service';
import { DataService } from '../data.service';

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

  constructor(private movieService: MovieService,
              private authService: AuthService,
              private dataService: DataService) { }

  ngOnInit() {
    this.watchListIndex = this.movieService.getWatchListIndex(this.movieIndex);
  }

  onAddToWatchList(index: number){
    this.watchListIndex = this.movieService.addToWatchList(index);
    this.movieService.watchListChanged.next(this.movieService.getWatchList());
  }

  onRemoveFromWatchList(){
    this.movieService.removeFromWatchList(this.watchListIndex);
    this.watchListIndex = -1;
    this.movieService.watchListChanged.next(this.movieService.getWatchList());
  }

  onDeleteMovie(index: number) {
    let watchListChanged: boolean = this.movieService.deleteMovie(index);
    if(watchListChanged) {
      this.movieService.watchListChanged.next(this.movieService.getWatchList());
    }
    this.movieService.moviesChanged.next(this.movieService.getMovies());
    this.dataService.saveMovies();
  }

  getMovieGenresString() {
    return this.movieService.getMovieGenresString(this.movieIndex);
  }

}
