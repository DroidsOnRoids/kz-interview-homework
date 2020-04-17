import { Component } from '@angular/core';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent {
  public city = '';
  public temperature = 0.0;
  public error = false;
  public hasBeenChecked = false;

  constructor(private service: WeatherService) { }

  onCheckClick() {
    this.service.checkWeatherFor(this.city).subscribe({
      next: (temperature) => {
        this.temperature = temperature;
        this.error = false;
      },
      error: () => {
        this.error = true;
      },
      complete: () => {
        this.hasBeenChecked = true;
      },
    });
  }

  get errorShown() {
    return this.error;
  }

  get tempInfoShown() {
    return !this.error && this.hasBeenChecked;
  }
}
