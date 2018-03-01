import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from './movie.model';

@Pipe({
  name: 'filterMovieByGenre'
})

export class FilterMovieByGenrePipe implements PipeTransform {

  transform(value: Movie[], genreName: string): Movie[] {
    let movies: Movie[] = [];
    for(let movie of value) {
      for(let genre of movie.genre) {
        if(genre.name === genreName){
          movies.push(movie);
          break;
        }
      }
    }
    return movies;
  }

}
