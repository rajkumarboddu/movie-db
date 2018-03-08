import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { WatchListComponent } from './watch-list/watch-list.component';
import { AppRoutingModule } from './app-routing.module';
import { GenreComponent } from './genre/genre.component';
import { FilterMovieByGenrePipe } from './genre/filter-movie-by-genre.pipe';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';


@NgModule({
  declarations: [
    AppComponent,
    GenreComponent,
    WatchListComponent,
    FilterMovieByGenrePipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    CoreModule,
    SharedModule,
    AuthModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
