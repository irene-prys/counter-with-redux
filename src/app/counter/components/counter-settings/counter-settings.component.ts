import { Component } from "@angular/core";

import { CounterSettingsService } from "../../services/counter-settings.service";

@Component({
    selector: "counter-settings",
    templateUrl: "./counter-settings.component.html"
})
export class CounterSettingsComponent {
    stepValue = 1;

    constructor(private counterSettingsService: CounterSettingsService) { }

    update(newValue: number) {
        this.counterSettingsService.updateStep(newValue);
    }
}