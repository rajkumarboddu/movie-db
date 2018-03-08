import { Genre } from './genre.model';

export class GenreService {
  private genres: Genre[] = [
    new Genre('Action'),
    new Genre('Adventure'),
    new Genre('Animation'),
    new Genre('Comedy'),
    new Genre('Sci-Fi')
  ];

  getGenres(): Genre[] {
    return this.genres.slice();
  }
}
