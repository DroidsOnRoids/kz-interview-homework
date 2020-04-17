import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const SECRET_API_KEY = '439d4b804bc8187953eb36d2a8c26a02';
const URL = 'https://openweathermap.org/data/2.5/weather';

type temperature = number

const extractTemp = (data: any): number => {
  try {
    const v = parseFloat(data['main']['temp'])
    if (Number.isNaN(v)) return 0
    return v
  } catch {
    return 0
  }
}

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(
    private http: HttpClient,
  ) { }

  checkWeatherFor(city: string): Observable<temperature> {
    return new Observable((observer) => {
      this.http
        .get<{ result: boolean }>(URL, {
          params: {
            q: city,
            appid: SECRET_API_KEY,
          }
        })
        .subscribe({
          next(data: any) {
            const temp = extractTemp(data)
            observer.next(temp);
            observer.complete();
          },
          error() {
            observer.error();
            observer.complete();
          },
        });
    })
  }
}
