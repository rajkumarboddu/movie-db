import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';

import { MovieService } from '../../movie/movie.service';
import * as fromApp from '../../store/app.reducers';
import * as fromAuth from '../../auth/store/auth.reducers';
import * as fromMovie from '../../movie/store/movie.reducers';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  moviesState: Observable<fromMovie.State>;
  authState: Observable<fromAuth.State>;

  constructor(private movieService: MovieService, private store: Store<fromApp.AppState>) {}

  ngOnInit() {
    this.moviesState = this.store.select('movies');
    this.authState = this.store.select('auth');
  }

}
