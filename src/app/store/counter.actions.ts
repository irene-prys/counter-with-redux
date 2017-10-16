import { Action } from '@ngrx/store';

export const COUNTER_ADD = "COUNTER_ADD";
export const COUNTER_SUBTRACT = "COUNTER_SUBTRACT";

export class CounterAddAction implements Action {
    readonly type = COUNTER_ADD;
    constructor(public payload: number) { }
}

export class CounterSubtractAction implements Action {
    readonly type = COUNTER_SUBTRACT;
    constructor(public payload: number) { };
}

export type CounterActions = CounterAddAction | CounterSubtractAction;