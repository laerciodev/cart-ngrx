import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { EMPTY, Observable } from 'rxjs';
import { map, mergeMap, catchError, tap } from 'rxjs/operators';
import { MoviesService } from './movies.service';
import { successGetAllAction, getAllAction } from '../../actions/movies.action';
import { Movie } from './movie.model';

@Injectable()
export class MovieEffects {
    loadMovies$: Observable<Action> = createEffect(() =>
        this.action$.pipe(
            ofType(getAllAction),
            mergeMap(
                () => this.moviesService.getAll().pipe(
                    map((movies: Movie[]) => {
                        return successGetAllAction({ payload: movies });
                    }),
                        catchError(() => EMPTY)
                    )
                ),
            ),
        );

    constructor(
        private action$: Actions,
        private moviesService: MoviesService
    ) {}

}
