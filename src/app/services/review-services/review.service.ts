import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor(private http:HttpClient) { }

  getReviewById(id:string) {
    return this.http.get(`http://localhost:8080/api/reviews/${id}`);
  }
}
