import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as ScoreboardActions from '../../actions/scoreboard.action';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.scss'],
})
export class ScoreboardComponent implements OnInit {
  game$: Observable<Game>;

  constructor(private store: Store<{ game: Game }>) {
    this.game$ = store.select('game');
  }

  ngOnInit() {}

  addScoreHome() {
    this.store.dispatch(ScoreboardActions.homeScore());
  }

  addScoreAway() {
    this.store.dispatch(ScoreboardActions.awayScore());
  }

  resetScore() {
    this.store.dispatch(ScoreboardActions.resetScore());
  }

  setScore(game: Game) {
    this.store.dispatch(ScoreboardActions.setScores({ game }));
  }
}

interface Game {
  home: number;
  away: number;
}
