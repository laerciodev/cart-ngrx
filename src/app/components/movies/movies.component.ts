import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Movie } from './movie.model';
import { getAllAction } from '../../actions/movies.action';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  movies$: Observable<Movie[]>;

  constructor(private store: Store<{ movies: Movie[] }>) {
    this.movies$ = store.select('movies');
  }

  ngOnInit() {
    this.store.dispatch(getAllAction());
  }

}
