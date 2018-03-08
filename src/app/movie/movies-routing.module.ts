import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MovieComponent } from './movie.component';
import { AuthGuardService } from '../auth/auth-guard.service';
import { MovieEditComponent } from './movie-edit/movie-edit.component';

const moviesRoutes: Routes = [
  { path: 'movies', component: MovieComponent, children:[
      { path: 'create', component: MovieEditComponent, canActivate: [AuthGuardService] },
      { path: ':id', component: MovieDetailComponent },
      { path: ':id/edit', component: MovieEditComponent, canActivate: [AuthGuardService] }
    ]}
];

@NgModule({
  imports: [
    RouterModule.forChild(moviesRoutes)
  ],
  exports: [ RouterModule ]
})
export class MoviesRoutingModule {}
