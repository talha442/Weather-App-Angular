import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { WeatherData } from '../models/weather.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  private API_URL= environment.weatherApiBaseUrl;
  private RapidAPIHostHeaderName = environment.XRapidAPIHostHeaderName;
  private RapidAPIHostHeaderValue = environment.XRapidAPIHostHeaderValue;
  private RapidAPIKeyHeaderName = environment.XRapidAPIKeyHeaderName;
  private RapidAPIKeyHeaderValue = environment.XRapidAPIKeyHeaderValue;

  getWeatherData(cityName: string): Observable<WeatherData> {
    return this.http.get<WeatherData>(this.API_URL, {
      headers: new HttpHeaders()
      .set(this.RapidAPIHostHeaderName, this.RapidAPIHostHeaderValue)
      .set(this.RapidAPIKeyHeaderName, this.RapidAPIKeyHeaderValue),
      params: new HttpParams()
      .set('q', cityName)
      .set('appid', 'da0f9c8d90bde7e619c3ec47766a42f4')
      .set('units', 'metric')
    })
  }
}
