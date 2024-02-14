import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { decrement, increment, resetCounter } from './counter.actions';
import { tap, withLatestFrom } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class CounterEffect {
  saveCount = createEffect(
    () =>
      this.actions$.pipe(
        ofType(increment, decrement, resetCounter),
        withLatestFrom(this.store.select('counter')),
        tap(([actions, counter]) => {
          localStorage.setItem('counter', counter.toString());
        })
      ),
    { dispatch: false }
  );
  constructor(
    private actions$: Actions,
    private store: Store<{ counter: number }>
  ) {}
}
