import { Component, Output, EventEmitter, OnInit } from "@angular/core";
import { CounterService } from "../../services/counter.service";
import { Store } from '@ngrx/store';

@Component({
    selector: "counter-operations-controls",
    templateUrl: "./counter-operations-sontrols.component.html"
})
export class CounterOperationsControlsComponent implements OnInit{
    @Output() onChanged = new EventEmitter<boolean>();

    constructor(private counterService:CounterService) {}

    add() {
        this.counterService.add(1);
    }

    subb() {
        this.counterService.sub(1);
    }

    ngOnInit() {
    }
}