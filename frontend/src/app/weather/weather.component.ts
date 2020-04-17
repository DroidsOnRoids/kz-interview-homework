import { Component } from '@angular/core';
import { WeatherService } from './weather.service';

@Component({
  selector: 'weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent {
  public city = ''
  public temperature = 0.0
  public error = false
  public hasBeenChecked = false

  constructor(private service: WeatherService) { }

  onCheckClick() {
    this.service.checkWeatherFor(this.city).subscribe({
      next: (temperature) => {
        this.temperature = temperature;
        this.error = false;
        console.log(this.tempInfoShown)
      },
      error: () => {
        console.log('eerror')
        this.error = true;
      },
      complete: () => {
        this.hasBeenChecked = true;
        console.log(this.tempInfoShown)
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
