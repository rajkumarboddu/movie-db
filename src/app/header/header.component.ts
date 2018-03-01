import { Component, OnInit } from '@angular/core';
import { GenreService } from '../movie/genre/genre.service';
import { Genre } from '../movie/genre/genre.model';
import { DataService } from '../shared/data.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  genres: Genre[];

  constructor(private genreService: GenreService, private dataService: DataService) { }

  ngOnInit() {
    this.genres = this.genreService.getGenres();
  }

  onSaveMovies() {
    this.dataService.saveMovies()
      .subscribe(
        (response: Response) => {
          console.log(response);
        }
      );
  }

}
