import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment, decrement, reset } from '../../actions/counter.action';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent {
  count$: Observable<number>;

  constructor(private store: Store<{ counter: number }>) {
    // este stream irá conectar ao estado atual do contador
    this.count$ = store.select('counter');
  }

  increment() {
    // Dispara uma ação de incremento
    this.store.dispatch(increment());
  }

  decrement() {
    // dispara uma ação de decremento
    this.store.dispatch(decrement());
  }

  reset() {
    // dispara uma ação de reset
    this.store.dispatch(reset());
  }

}
