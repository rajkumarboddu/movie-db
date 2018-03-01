import { Movie } from './movie.model';
import { Rating } from './rating/rating.model';
import { Genre } from './genre/genre.model';
import { Subject } from 'rxjs/Subject';

export class MovieService {
  public watchListChanged = new Subject();
  public moviesChanged = new Subject();
  public editModeChanged = new Subject();
  editedMovieIndex: number;

  private movies: Movie[] = [
    new Movie(
      'Avengers',
      'Infinity War',
      'https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/0/03/Avengers_Infinity_War_Poster_2.jpg/revision/latest?cb=20180211004609',
      [
        new Genre('Action'),
        new Genre('Adventure'),
      ],
      new Rating(4),
      'Iron Man, Thor, the Hulk and the rest of the Avengers unite to battle their most powerful enemy yet -- the evil Thanos. On a mission to collect all six Infinity Stones, Thanos plans to use the artifacts to inflict his twisted will on reality. The fate of the planet and existence itself has never been more uncertain as everything the Avengers have fought for has led up to this moment.'
    ),
    new Movie(
      'The Incredibles',
      'Save the day',
      'https://vignette.wikia.nocookie.net/pixar/images/f/f7/Incredibles_ver9_xlg.jpg/revision/latest?cb=20110414142923',
      [
        new Genre('Action'),
        new Genre('Adventure'),
      ],
      new Rating(3),
      'Forced to adopt a civilian identity and stuck in a white-collar job, Mr Incredible itches to get back into action. When he is lured into a trap by the evil Syndrome, his family contrives to save him.'
    ),
    new Movie(
      'Tangled',
      '',
      'https://vignette.wikia.nocookie.net/disney/images/2/2f/Tangled_poster_nov-535x745.jpg/revision/20140317004447',
      [
        new Genre('Fantasy'),
        new Genre('Comedy'),
      ],
      new Rating(4),
      'Rapunzel, an innocent, young girl, is locked up by her overly protective mother. Her wish to escape into the world outside finally comes true when she meets the good-hearted thief, Flynn.'
    ),
    new Movie(
      'Avatar',
      '',
      'http://3.bp.blogspot.com/-eA7fsOHqWwU/Vl4BD4AL99I/AAAAAAAAA3s/2J05fi6GlPc/s1600/CAPA-DVD%255Bwww.baixarportorrent.com.br%255D.jpg',
      [
        new Genre('Sci-Fi'),
        new Genre('Fantasy')
      ],
      new Rating(4),
      'Jake, a paraplegic marine, replaces his brother on the Na\'vi inhabited Pandora for a corporate mission. He is accepted by the natives as one of their own but he must decide where his loyalties lie.'
    ),
  ];

  private watchListMovies: Movie[] = [];

  getMovies(): Movie[] {
    return this.movies.slice();
  }

  getWatchList(): Movie[] {
    return this.watchListMovies.slice();
  }

  removeFromWatchList(index: number) {
    this.watchListMovies.splice(index, 1);
  }

  addToWatchList(index: number): number {
    this.watchListMovies.push(this.movies.slice()[index]);
    return this.watchListMovies.length-1;
  }

  deleteMovie(movieIndex: number): boolean {
    if(this.getWatchListIndex(movieIndex) !== -1){
      this.removeFromWatchList(movieIndex);
      return true;
    }
    this.movies.splice(movieIndex,1);
    return false;
  }

  getMovie(movieIndex: number): Movie {
    return this.movies.slice()[movieIndex];
  }

  addMovie(newMovie: Movie) {
    this.movies.push(newMovie);
  }

  getWatchListIndex(index: number): number {
    for(let i in this.watchListMovies) {
      if(this.watchListMovies[i].name === this.movies[index].name){
        return +i;
      }
    }
    return -1;
  }

  updateMovie(index: number, updatedMovie: Movie) {
    this.movies[index] = updatedMovie;
  }

}
