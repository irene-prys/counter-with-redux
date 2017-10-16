import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { CounterOperationsControlsComponent } from './counter/components/counter-operations-controls/counter-operations-sontrols.component';
import { CounterSettingsComponent } from './counter/components/counter-settings/counter-settings.component';

import { CounterService } from './counter/services/counter.service';
import { counterStateReducer } from './counter/store/counter.reducer';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    CounterSettingsComponent,
    CounterOperationsControlsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({ counterState: counterStateReducer })
  ],
  providers: [CounterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
