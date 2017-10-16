import { Action } from '@ngrx/store';

export const COUNTER_INCREMENT = "COUNTER_INCREMENT";
export const COUNTER_DECREMENT = "COUNTER_DECREMENT";

export class CounterIncrementAction implements Action {
    readonly type = COUNTER_INCREMENT;
    constructor( public payload: number) { }
}

export class CounterDecrementAction implements Action {
    readonly type = COUNTER_DECREMENT;
    constructor( public payload: number) { };
}

export type CounterActions = CounterIncrementAction | CounterDecrementAction;