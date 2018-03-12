import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { MovieComponent } from './movie.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MovieEditComponent } from './movie-edit/movie-edit.component';
import { MoviesRoutingModule } from './movies-routing.module';
import { SharedModule } from '../shared/shared.module';
import { movieReducers } from './store/movie.reducers';
import { MovieEffects } from './store/movie.effects';

@NgModule({
  declarations: [
    MovieComponent,
    MovieEditComponent,
    MovieDetailComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MoviesRoutingModule,
    SharedModule,
    StoreModule.forFeature('movies', movieReducers),
    EffectsModule.forFeature([MovieEffects])
  ]
})
export class MoviesModule {}
