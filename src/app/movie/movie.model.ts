import { Rating } from './rating/rating.model';
import {Genre} from './genre/genre.model';

export class Movie {
  constructor(
    public name: string,
    public caption: string,
    public poster: string,
    public genre: Genre[],
    public rating: Rating,
    public synopsis: string
  ) {}

  getMovieGenres() {
    let genres = [];
    for(let genre of this.genre) {
      genres.push(genre.name);
    }
    return genres.join(", ");
  }
}
