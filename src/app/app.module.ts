import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { WatchListComponent } from './watch-list/watch-list.component';
import { MovieService } from './movie/movie.service';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { GenreService } from './genre/genre.service';
import { DataService } from './shared/data.service';
import { AuthService } from './auth/auth.service';
import { AuthGuardService } from './auth/auth-guard.service';
import { PublicGuardService } from './auth/public-guard.service';
import { MoviesModule } from './movie/movies.module';
import { GenreComponent } from './genre/genre.component';
import { FilterMovieByGenrePipe } from './genre/filter-movie-by-genre.pipe';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GenreComponent,
    WatchListComponent,
    HomeComponent,
    FilterMovieByGenrePipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    SharedModule,
    MoviesModule,
    AuthModule,
    AppRoutingModule
  ],
  providers: [MovieService, GenreService, DataService, AuthService, AuthGuardService, PublicGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
