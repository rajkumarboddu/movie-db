import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WatchListComponent } from './watch-list/watch-list.component';
import { HomeComponent } from './home/home.component';
import { MovieComponent } from './movie/movie.component';
import { MovieEditComponent } from './movie/movie-edit/movie-edit.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'watch-list', component: WatchListComponent },
  { path: 'movies/create', component: MovieEditComponent },
  { path: 'movies/:id', component: MovieComponent, children:[
      { path: 'edit', component: MovieEditComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
