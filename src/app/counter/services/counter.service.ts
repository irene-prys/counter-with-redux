import {Store} from '@ngrx/store';
import {Counter} from '../models/counter';
import {Injectable} from '@angular/core';
import * as CounterActions from '../store/counter.actions';

@Injectable()
export class CounterService {
    constructor (private store: Store<{counterState: number}>) {}

    add(amount: number) {
        this.store.dispatch(new CounterActions.CounterAddAction(amount));
    }

    sub(amount: number) {
        this.store.dispatch(new CounterActions.CounterSubtractAction(amount));
    }
}