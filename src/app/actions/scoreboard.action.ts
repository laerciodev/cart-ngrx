import { createAction, props } from '@ngrx/store';

interface Game {
    home: number;
    away: number;
}

export const homeScore = createAction('[ScoreBoard Page] Home Score');
export const awayScore = createAction('[ScoreBoard Page] Away Score');
export const resetScore = createAction('[ScoreBoard Page] Score reset');
export const setScores = createAction('[ScoreBoard Page] Set scores', props<{ game: Game }>());
