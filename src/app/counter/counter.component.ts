import { Component } from '@angular/core';

@Component({
    selector: 'counter',
    templateUrl: './counter.component.html'
})
export class CounterComponent {
    counterResult = 0;
    step: number = 1;

    onChanged(added) {
        console.error("step = " + this.step);
        added == true ? this.counterResult += this.step : this.counterResult -= this.step;// what if I wanna use enum here?
    }
}