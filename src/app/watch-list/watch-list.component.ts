import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';

import * as fromApp from '../store/app.reducers';
import * as fromWatchList from './store/watch-list.reducers';

@Component({
  selector: 'app-watch-list',
  templateUrl: './watch-list.component.html',
  styleUrls: ['./watch-list.component.css']
})
export class WatchListComponent implements OnInit {
  watchListState: Observable<fromWatchList.State>;

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.watchListState = this.store.select('watchList');
  }

}
