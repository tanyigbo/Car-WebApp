import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private http: HttpClient) { }

  getCarByModel(model: string) {
    return this.http.get(`http://localhost:8080/api/cars/model/${model}`);
  }
}
