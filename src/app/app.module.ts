import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { CounterService } from './services/counter.service';
import { counterStateReducer } from './store/counter.reducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ counterStateReducer })
  ],
  providers: [CounterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
