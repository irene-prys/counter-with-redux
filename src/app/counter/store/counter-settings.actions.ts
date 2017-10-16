import { Action } from '@ngrx/store';

export const UPDATE_COUNTER_STEP = "UPDATE_COUNTER_STEP";

export class CounterUpdateStepAction implements Action {
    readonly type = UPDATE_COUNTER_STEP;
    constructor(public payload: number) { }
}

export type CounterSettingActions = CounterUpdateStepAction;
