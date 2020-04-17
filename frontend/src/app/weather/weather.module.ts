import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { WeatherComponent } from './weather.component';
import { WeatherService } from './weather.service';

@NgModule({
  declarations: [
    WeatherComponent,
  ],
  imports: [CommonModule, HttpClientModule, FormsModule],
  exports: [WeatherComponent],
  providers: [WeatherService],
  bootstrap: []
})
export class WeatherModule { }
