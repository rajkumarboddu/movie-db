import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WatchListComponent } from './watch-list/watch-list.component';
import { HomeComponent } from './home/home.component';
import { MovieComponent } from './movie/movie.component';
import { MovieEditComponent } from './movie/movie-edit/movie-edit.component';
import { MovieDetailComponent } from './movie/movie-detail/movie-detail.component';
import { GenreComponent } from './movie/genre/genre.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'watch-list', component: WatchListComponent },
  { path: 'movies', component: MovieComponent, children:[
      { path: 'create', component: MovieEditComponent },
      { path: ':id', component: MovieDetailComponent },
      { path: ':id/edit', component: MovieEditComponent }
  ]},
  { path: 'genres/:genreName', component: GenreComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
