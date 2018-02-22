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
import {AppRoutingModule} from './app-routing.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MovieComponent,
    RatingComponent,
    WatchListComponent,
    GenreComponent,
    MovieThumbnailComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
