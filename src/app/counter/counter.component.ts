import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Counter } from './models/counter';

@Component({
    selector: 'counter',
    templateUrl: './counter.component.html'
})
export class CounterComponent implements OnInit {
    сounterSubscription: Subscription;
    counterState: Observable<Counter>;

    counterResult = 0;
    step: number = 1;    

    constructor(private store: Store<{ counterState: Counter }>) {
        this.counterState = this.store.select('counterState');
    }

    onChanged(added) {
        console.error("step = " + this.step);
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