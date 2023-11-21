// src/app/movie-list/movie-list.component.ts

import { Component } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent {
  searchQuery: string = '';
  movies: any[] = [];

  constructor(private movieService: MovieService) {}

  searchMovies() {
    if (this.searchQuery.trim() !== '') {
      this.movieService.searchMovies(this.searchQuery).subscribe(
        (data) => {
          this.movies = data.results;
        },
        (error) => {
          console.error('Error in searchMovies:', error);
        }
      );
    }
  }
}
