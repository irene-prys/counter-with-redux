import * as CounterActions from './counter.actions';
import { Counter } from '../models/counter'

const initialState: Counter = { value: 0};

export function counterStateReducer(state = initialState, action: CounterActions.CounterActions) {// todo: think over the name
    switch (action.type) {
        case CounterActions.COUNTER_ADD:
        let obj = {
            ...state,
            value: state.value + action.payload
        };
        console.log('new value of counter is ' + obj.value);// todo: remove me
            return {
                ...state,
                value: state.value + action.payload
            };
        case CounterActions.COUNTER_SUBTRACT:
            return {
                ...state,
                value: state.value - action.payload
            };
        default:
            return state;
    }

}