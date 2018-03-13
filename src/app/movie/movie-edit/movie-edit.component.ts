import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import { Store } from '@ngrx/store';

import { GenreService } from '../../genre/genre.service';
import { Genre } from '../../genre/genre.model';
import { Movie } from '../movie.model';
import { Rating } from '../../shared/rating/rating.model';
import * as fromApp from '../../store/app.reducers';
import * as fromMovie from '../store/movie.reducers';
import * as fromMovieActions from '../store/movie.actions';

@Component({
  selector: 'app-movie-edit',
  templateUrl: './movie-edit.component.html',
  styleUrls: ['./movie-edit.component.css']
})
export class MovieEditComponent implements OnInit {
  genres: Genre[];
  id: number;
  movie: Movie;
  movieForm: FormGroup;
  formSubmitSuccess: boolean = false;
  editMode: boolean = false;

  constructor(private genreService: GenreService,
              private router: Router,
              private route: ActivatedRoute,
              private location: Location,
              private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.genres = this.genreService.getGenres();
    this.route.params.subscribe(
      (params: Params) => {
        this.id = params['id'] ? +params['id'] : null;
        if(this.id !== null){
          this.store.select('movies')
            .subscribe(
            (moviesState: fromMovie.State) => {
              this.movie = moviesState.movies[this.id];
            }
          );
          this.editMode = true;
        }
      }
    );
    this.initForm();
  }

  initForm() {
    let formObj = {
      'name': new FormControl(null, Validators.required),
      'caption': new FormControl(null),
      'genre': new FormArray(this.getGenreFormControls(), [Validators.required, this.requireAtleastOneGenre.bind(this)]),
      'rating': new FormControl("", Validators.required),
      'poster': new FormControl(null, Validators.required),
      'synopsis': new FormControl(null, Validators.required)
    };
    if(this.editMode) {
      formObj = {
        'name': new FormControl(this.movie.name, Validators.required),
        'caption': new FormControl(this.movie.caption),
        'genre': new FormArray(this.getGenreFormControls(), [Validators.required, this.requireAtleastOneGenre.bind(this)]),
        'rating': new FormControl(this.movie.rating.rating, Validators.required),
        'poster': new FormControl(this.movie.poster, Validators.required),
        'synopsis': new FormControl(this.movie.synopsis, Validators.required)
      }
    }
    this.movieForm = new FormGroup(formObj);
  }

  requireAtleastOneGenre(formArray: FormArray): {[s: string]: boolean} {
    let genreControls = formArray.controls;
    let count = 0;
    for(let i in genreControls) {
      if(genreControls[i].value === false){
        count++;
      }
    }
    if(count === genreControls.length){
      return {'noGenreSelected': true};
    }
    return null;
  }

  getGenreFormControls(): FormControl[] {
    const formControls: FormControl[] = [];
    if(this.editMode){
      for(let genre of this.genres) {
        let state = false;
        for(let eGenre of this.movie.genre) {
          if(eGenre.name === genre.name){
            state = true;
            break;
          }
        }
        formControls.push(new FormControl(state));
      }
    } else{
      for(let genre of this.genres) {
        formControls.push(new FormControl(false));
      }
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
      new Rating(this.movieForm.get('rating').value),
      this.movieForm.get('synopsis').value
    );
    if(this.editMode){
      this.store.dispatch(new fromMovieActions.UpdateMovie({index: this.id, movie: newMovie}));
      this.location.back();
    } else{
      this.store.dispatch(new fromMovieActions.AddMovie(newMovie));
      this.movieForm.reset();
    }
    this.formSubmitSuccess = true;
    this.store.dispatch(new fromMovieActions.SaveMovies());
  }

  onCancel(){
    this.location.back();
  }

}
