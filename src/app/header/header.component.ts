import { Component, OnInit } from '@angular/core';
import { GenreService } from '../movie/genre/genre.service';
import { Genre } from '../movie/genre/genre.model';
import { DataService } from '../shared/data.service';
import { Response } from '@angular/http';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  genres: Genre[];

  constructor(private genreService: GenreService,
              private dataService: DataService,
              private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
    this.genres = this.genreService.getGenres();
  }

  onLogout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}
