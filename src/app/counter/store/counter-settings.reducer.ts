import * as CounterSettingActions from './counter-settings.actions';
import { CounterSettings } from '../models/counter-settings.model';

const initialState: CounterSettings = { step: 1 };

export function counterSettingsStateReducer(state = initialState, action: CounterSettingActions.CounterSettingActions) {
    switch (action.type) {
        case CounterSettingActions.UPDATE_COUNTER_STEP:
            return {
                ...state,
                step: action.payload
            };
        default:
            return state;
    }

}