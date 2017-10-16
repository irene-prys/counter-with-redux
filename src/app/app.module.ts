import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { CounterOperationsControlsComponent } from './counter/components/counter-operations-controls/counter-operations-controls.component';
import { CounterSettingsComponent } from './counter/components/counter-settings/counter-settings.component';

import { CounterService } from './counter/services/counter.service';
import { CounterSettingsService } from './counter/services/counter-settings.service';

import { counterStateReducer } from './counter/store/counter.reducer';
import { counterSettingsStateReducer } from './counter/store/counter-settings.reducer';

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
    StoreModule.forRoot({ counterState: counterStateReducer, counterSettingsState: counterSettingsStateReducer })
  ],
  providers: [CounterService, CounterSettingsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
