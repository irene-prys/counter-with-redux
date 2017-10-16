import { Component, Output, EventEmitter } from "@angular/core"

@Component({
    selector: "counter-operations-controls",
    templateUrl: "./counter-operations-sontrols.component.html"
})
export class CounterOperationsControlsComponent {
    @Output() onChanged = new EventEmitter<boolean>();

    add() {
        this.onChanged.emit(true);
    }

    subb() {
        this.onChanged.emit(false);
    }
}