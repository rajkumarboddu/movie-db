import { Component, OnInit } from '@angular/core';
import {GenreService} from '../movie/genre/genre.service';
import {Genre} from '../movie/genre/genre.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  genres: Genre[];

  constructor(private genreService: GenreService) { }

  ngOnInit() {
    this.genres = this.genreService.getGenres();
  }

}
