import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor(private http:HttpClient) { }

  /**
   * Uses API GET Request to retrive a review by id
   * @param id the id of the review
   * @returns Review object as an observable
   */
  getReviewById(id:string) {
    return this.http.get(`http://localhost:8080/api/reviews/${id}`);
  }
}
