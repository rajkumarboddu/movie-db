import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { WatchListComponent } from './watch-list/watch-list.component';
import { MovieService } from './movie/movie.service';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { GenreService } from './genre/genre.service';
import { DataService } from './shared/data.service';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthService } from './auth/auth.service';
import { AuthGuardService } from './auth/auth-guard.service';
import { PublicGuardService } from './auth/public-guard.service';
import { MoviesModule } from './movie/movies.module';
import { GenreComponent } from './genre/genre.component';
import { FilterMovieByGenrePipe } from './genre/filter-movie-by-genre.pipe';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GenreComponent,
    WatchListComponent,
    HomeComponent,
    SignupComponent,
    LoginComponent,
    FilterMovieByGenrePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SharedModule,
    MoviesModule,
    AppRoutingModule
  ],
  providers: [MovieService, GenreService, DataService, AuthService, AuthGuardService, PublicGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
