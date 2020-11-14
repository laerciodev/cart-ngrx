import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../movies/movie.model';

@Injectable({
    providedIn: 'root'
  })
  export class MoviesService {
    constructor(
        private http: HttpClient
    ) {}

    getAll() {
      return this.http.get<Movie[]>('http://localhost:7189/movies');
    }
}
