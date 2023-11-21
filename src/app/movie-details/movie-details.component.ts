// src/app/movie-details/movie-details.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
})
export class MovieDetailsComponent implements OnInit {
  movieId: number = 0;
  movieDetails: any;

  constructor(private route: ActivatedRoute, private movieService: MovieService) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.movieId = params['id'];
      this.getMovieDetails();
    });
  }

  getMovieDetails() {
    this.movieService.getMovieDetails(this.movieId).subscribe(
      (data) => {
        this.movieDetails = data;
      },
      (error) => {
        console.error('Error in getMovieDetails:', error);
      }
    );
  }

  getGenres(): string {
    return this.movieDetails.genres ? this.movieDetails.genres.map((genre: any) => genre.name).join(', ') : 'N/A';
  }

  getProductionCompanies(): string {
    return this.movieDetails.production_companies ? this.movieDetails.production_companies.map((company: any) => company.name).join(', ') : 'N/A';
  }

  getCast(): any[] {
    return this.movieDetails.credits ? this.movieDetails.credits : [];
  }
}
