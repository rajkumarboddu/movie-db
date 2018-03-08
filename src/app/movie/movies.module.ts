import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { MovieComponent } from './movie.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MovieEditComponent } from './movie-edit/movie-edit.component';
import { MoviesRoutingModule } from './movies-routing.module';
import {SharedModule} from '../shared/shared.module';

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
    SharedModule
  ]
})
export class MoviesModule {}
