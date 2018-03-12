import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import * as firebase from "firebase";

import { GenreService } from '../../genre/genre.service';
import { Genre } from '../../genre/genre.model';
import { DataService } from '../../shared/data.service';
import * as fromApp from '../../store/app.reducers';
import * as fromAuth from '../../auth/store/auth.reducers';
import * as fromAuthActions from '../../auth/store/auth.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  genres: Genre[];
  authState: Observable<fromAuth.State>;

  constructor(private genreService: GenreService,
              private dataService: DataService,
              private router: Router,
              private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.genres = this.genreService.getGenres();
    this.authState = this.store.select('auth');
  }

  onLogout() {
    firebase.auth().signOut();
    this.store.dispatch(new fromAuthActions.Logout());
    this.router.navigate(['/login']);
  }

}
