import { Action, createReducer, on } from '@ngrx/store';
import * as ScoreBoardActions from '../actions/scoreboard.action';

export interface State {
    home: number;
    away: number;
}

// o estado original permanece inalterado
export const initialState: State = {
    home: 0,
    away: 0
};

const scoreboarReducer = createReducer(
    initialState,
    // copiei o valor do state e depois atualizei apenas a propriedade home
    on(ScoreBoardActions.homeScore, state => ({...state, home: state.home + 1 })),
    // copiei o valor do state com spread operator e atualizei apenas a propriedade away
    on(ScoreBoardActions.awayScore, state => ({...state, away: state.away + 1 })),
    on(ScoreBoardActions.resetScore, state => (initialState)),
    on(ScoreBoardActions.setScores, (state, { game }) => ({ home: game.home, away: game.away }))
);

export function reducer(state: State | undefined, action: Action) {
    return scoreboarReducer(state, action);
}

