import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { WatchListComponent } from './watch-list/watch-list.component';
import { AppRoutingModule } from './app-routing.module';
import { GenreComponent } from './genre/genre.component';
import { FilterMovieByGenrePipe } from './genre/filter-movie-by-genre.pipe';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';
import { appReducers } from './store/app.reducers';
import { AuthEffects } from './auth/store/auth.effects';
import { MovieEffects } from './movie/store/movie.effects';


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
    HttpClientModule,
    CoreModule,
    SharedModule,
    AuthModule,
    AppRoutingModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([AuthEffects, MovieEffects])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
