import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {StoreModule} from '@ngrx/store';

import { AppComponent } from './app.component';
import { WatchListComponent } from './watch-list/watch-list.component';
import { AppRoutingModule } from './app-routing.module';
import { GenreComponent } from './genre/genre.component';
import { FilterMovieByGenrePipe } from './genre/filter-movie-by-genre.pipe';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';
import { appReducers } from './store/app.reducers';
import {EffectsModule} from '@ngrx/effects';
import {AuthEffects} from './auth/store/auth.effects';


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
    AppRoutingModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([AuthEffects])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
