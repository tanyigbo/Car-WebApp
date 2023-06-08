import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MakeService {

  constructor(private http: HttpClient) { }

  getAllManufactures() {
    return this.http.get(`http://localhost:8080/api/manufacturers`);
  }

  getAllCarsByManufacturer(make:string){
    return this.http.get(`http://localhost:8080/api/manufacturers/${make}/cars`);
  }
}
