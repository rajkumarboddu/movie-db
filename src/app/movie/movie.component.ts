import { Component, OnInit } from '@angular/core';
import { Movie } from './movie.model';
import { ActivatedRoute, Params} from '@angular/router';
import { MovieService } from './movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  movie: Movie;
  id: number;

  constructor(private movieService: MovieService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.movie = this.movieService.getMovie(this.id);
      }
    )
  }

}
