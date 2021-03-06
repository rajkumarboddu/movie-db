import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes} from '@angular/router';
import { WatchListComponent } from './watch-list/watch-list.component';
import { HomeComponent } from './core/home/home.component';
import { GenreComponent } from './genre/genre.component';
import { AuthGuardService } from './auth/auth-guard.service';

const appRoutes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'movies', loadChildren: './movie/movies.module#MoviesModule'},
  { path: 'watch-list', component: WatchListComponent, canActivate: [AuthGuardService] },
  { path: 'genres/:genreName', component: GenreComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule],
  providers: [AuthGuardService]
})
export class AppRoutingModule {}
