import { Component, OnInit } from '@angular/core';
import { GenreService } from '../genre/genre.service';
import { Genre } from '../genre/genre.model';
import { ActivatedRoute, Params } from '@angular/router';
import { MovieService } from '../movie.service';
import { Movie } from '../movie.model';
import { FormArray, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-movie-edit',
  templateUrl: './movie-edit.component.html',
  styleUrls: ['./movie-edit.component.css']
})
export class MovieEditComponent implements OnInit {
  genres: Genre[];
  poster: string;
  id: number;
  movie: Movie;
  movieForm: FormGroup;

  constructor(private genreService: GenreService,
              private movieService: MovieService,
              private router: ActivatedRoute) { }

  ngOnInit() {
    this.genres = this.genreService.getGenres();
    this.router.params.subscribe(
      (params: Params) => {
        this.id = params['id'];
        this.movie = this.movieService.getMovie(this.id);
      }
    );
    this.movieForm = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'caption': new FormControl(null),
      'genre': new FormArray(this.getGenreFormControls(), Validators.required),
      'rating': new FormControl("", Validators.required),
      'poster': new FormControl(null, Validators.required),
      'synopsis': new FormControl(null, Validators.required)
    });
  }

  getGenreFormControls(): FormControl[] {
    const formControls: FormControl[] = [];
    for(let genre of this.genres) {
      formControls.push(new FormControl(false));
    }
    return formControls;
  }

  onSubmit() {
    if(!this.movieForm.valid){
      return;
    }
    let genre: Genre[] = [];
    let genreControls = (<FormArray>this.movieForm.get('genre')).controls;
    for(let i in genreControls) {
      if(genreControls[i].value){
        genre.push(new Genre(this.genres[i].name));
      }
    }
    let newMovie = new Movie(
      this.movieForm.get('name').value,
      this.movieForm.get('caption').value || '',
      this.movieForm.get('poster').value,
      genre,
      this.movieForm.get('rating').value,
      this.movieForm.get('synopsis').value
    );
    this.movieService.addMovie(newMovie);
  }

}
