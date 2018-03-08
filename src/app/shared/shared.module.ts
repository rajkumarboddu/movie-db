import {NgModule} from '@angular/core';
import {RatingComponent} from './rating/rating.component';
import {LoaderComponent} from './loader/loader.component';
import {MovieThumbnailComponent} from './movie-thumbnail/movie-thumbnail.component';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    RatingComponent,
    LoaderComponent,
    MovieThumbnailComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    CommonModule,
    RatingComponent,
    LoaderComponent,
    MovieThumbnailComponent
  ]
})
export class SharedModule {}
