import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private http: HttpClient) { }

  /**
   * Uses API GET Request to retrive a car by model name
   * @param model model name of car 
   * @returns Car object as an observable
   */
  getCarByModel(model: string) {
    return this.http.get(`http://localhost:8080/api/cars/model/${model}`);
  }

  /**
   * Uses API GET Request to retrive all cars
   * @returns List of all cars as an observable
   */
  getAllCars(){
    return this.http.get(`http://localhost:8080/api/cars`)
  }
}
