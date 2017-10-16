import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { CounterSettings } from '../models/counter-settings.model';
import * as CounterSettingActions from '../store/counter-settings.actions';

@Injectable()
export class CounterSettingsService {
    constructor(private store: Store<{ counterSettingsState: CounterSettings }>) { }

    updateStep(step: number) {
        this.store.dispatch(new CounterSettingActions.CounterUpdateStepAction(step));
    }
}