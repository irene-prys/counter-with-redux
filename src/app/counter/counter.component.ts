import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Counter } from './models/counter.model';

@Component({
    selector: 'counter',
    templateUrl: './counter.component.html'
})
export class CounterComponent implements OnInit, OnDestroy {
    сounterSubscription: Subscription;
    counterState: Observable<Counter>;

    counterResult: number;

    constructor(private store: Store<{ counterState: Counter }>) {
        this.counterState = this.store.select('counterState');
    }

    ngOnInit() {
        this.сounterSubscription = this.counterState.subscribe((state) => {
            this.counterResult = state.value;
        });
    }

    ngOnDestroy() {
        this.сounterSubscription.unsubscribe();
    }

}