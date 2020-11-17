import { createReducer, on, Action } from '@ngrx/store';
import { getAllAction, successGetAllAction } from '../actions/movies.action';
import { Movie } from '../components/movies/movie.model';

// define initial state
export const initialState = [];

// create reducers
// tslint:disable-next-line: variable-name
const _movieReducer = createReducer(
    initialState,
    on(getAllAction, state => state),
    on(successGetAllAction, (state, { payload }) => [...payload])
);

export function moviesReducer(state: Movie[] | undefined, action: Action) {
    return _movieReducer(state, action);
}
