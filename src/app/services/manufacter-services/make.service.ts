import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MakeService {

  constructor(private http: HttpClient) { }

  /**
   * Uses API GET Request to retrive a list of all manufacturers
   * @returns List of manufacturers as an observable
   */
  getAllManufactures() {
    return this.http.get(`http://localhost:8080/api/manufacturers`);
  }

  /**
   * Uses API GET Request to retrive all cars by manufacturer
   * @param make name of manufacturer
   * @returns List of cars with matching manufacturer
   */
  getAllCarsByManufacturer(make: string) {
    return this.http.get(`http://localhost:8080/api/manufacturers/${make}/cars`);
  }
}
