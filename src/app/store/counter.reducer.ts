import { createReducer, on } from '@ngrx/store';
import { decrement, increment, resetCounter } from './counter.actions';

const initialState = 0;

export const counterReducer = createReducer(
  initialState,
  on(increment, (state) => state + 1),
  on(decrement, (state) => state - 1),
  on(resetCounter, (state) => initialState)
);
