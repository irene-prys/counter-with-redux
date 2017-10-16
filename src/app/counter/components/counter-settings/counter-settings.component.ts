import { Component, Input, Output, EventEmitter } from "@angular/core"

@Component({
    selector: "counter-settings",
    templateUrl: "./counter-settings.component.html"
})
export class CounterSettingsComponent {
    @Input() stepValue: number;
    @Output() stepValueChange = new EventEmitter<number>();

    update(newValue: number) {
        this.stepValue = newValue;
        this.stepValueChange.emit(newValue);
    }
}