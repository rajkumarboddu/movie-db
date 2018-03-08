import {NgModule} from '@angular/core';
import {HeaderComponent} from './header/header.component';
import {HomeComponent} from './home/home.component';
import {CommonModule} from '@angular/common';
import {AppRoutingModule} from '../app-routing.module';
import {AuthService} from '../auth/auth.service';
import {DataService} from '../shared/data.service';
import {GenreService} from '../genre/genre.service';
import {MovieService} from '../movie/movie.service';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule
  ],
  exports: [
    HomeComponent,
    HeaderComponent,
    AppRoutingModule
  ],
  providers: [
    MovieService,
    GenreService,
    DataService,
    AuthService
  ]
})
export class CoreModule {}
