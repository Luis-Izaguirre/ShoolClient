import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { environment } from '../../environments/environment';

interface WeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  public forecasts: WeatherForecast[] = [];
 
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getForecasts();

  }

  getForecasts() {
    this.http.get<WeatherForecast[]>(`${environment.baseUrl}'weatherforecast`).subscribe(
      (result) => {
        this.forecasts = result;
      },
      (error) => {
        console.error("Hi");
      }
    );
  } 
}


