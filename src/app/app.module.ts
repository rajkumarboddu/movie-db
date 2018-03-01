import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MovieComponent } from './movie/movie.component';
import { RatingComponent } from './movie/rating/rating.component';
import { WatchListComponent } from './watch-list/watch-list.component';
import { GenreComponent } from './movie/genre/genre.component';
import { MovieService } from './movie/movie.service';
import { MovieThumbnailComponent } from './movie-thumbnail/movie-thumbnail.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { MovieEditComponent } from './movie/movie-edit/movie-edit.component';
import { GenreService } from './movie/genre/genre.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MovieDetailComponent } from './movie/movie-detail/movie-detail.component';
import { FilterMovieByGenrePipe } from './movie/filter-movie-by-genre.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MovieComponent,
    RatingComponent,
    WatchListComponent,
    GenreComponent,
    MovieThumbnailComponent,
    HomeComponent,
    MovieEditComponent,
    MovieDetailComponent,
    FilterMovieByGenrePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [MovieService, GenreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
