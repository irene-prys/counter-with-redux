import { Component, OnInit, OnDestroy } from "@angular/core";
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';

import { CounterService } from "../../services/counter.service";
import { CounterSettings } from '../../models/counter-settings.model';

@Component({
    selector: "counter-operations-controls",
    templateUrl: "./counter-operations-controls.component.html"
})
export class CounterOperationsControlsComponent implements OnInit, OnDestroy {
    сounterSubscription: Subscription;
    counterSettingsState: Observable<CounterSettings>;

    counterStep: number;

    constructor(private counterService: CounterService, private store: Store<{ counterSettingsState: CounterSettings }>) {
        this.counterSettingsState = this.store.select('counterSettingsState');
    }

    add() {
        this.counterService.add(this.counterStep);
    }

    subb() {
        this.counterService.sub(this.counterStep);
    }

    ngOnInit() {
        this.сounterSubscription = this.counterSettingsState.subscribe((state) => {
            this.counterStep = state.step;
        });
    }

    ngOnDestroy() {
        this.сounterSubscription.unsubscribe();
    }
}