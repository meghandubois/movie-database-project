// src/app/movie.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private apiKey = 'c9555e61ac1f488b2a0a8a3a319419ad'; 
  private apiUrl = 'https://api.themoviedb.org/3';

  constructor(private http: HttpClient) {}

  searchMovies(query: string): Observable<any> {
    const url = `${this.apiUrl}/search/movie?api_key=${this.apiKey}&query=${query}`;
    return this.http.get(url).pipe(
      map((data) => data),
      catchError((error) => {
        console.error('Error in searchMovies:', error);
        return throwError(error);
      })
    );
  }

  getMovieDetails(movieId: number): Observable<any> {
    const url = `${this.apiUrl}/movie/${movieId}?api_key=${this.apiKey}`;
    return this.http.get(url).pipe(
      map((data) => data),
      catchError((error) => {
        console.error('Error in getMovieDetails:', error);
        return throwError(error);
      })
    );
  }
}
