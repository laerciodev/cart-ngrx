import { createAction, props } from '@ngrx/store';
import { Movie } from '../components/movies/movie.model';

export const getAllAction = createAction('[Movies] Load Movies');

export const successGetAllAction = createAction(
    '[Movies] Load Movies Success',
    props<{ payload: Movie[] }>()
);
