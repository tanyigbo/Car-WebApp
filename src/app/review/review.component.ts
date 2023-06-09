import { Component, OnInit } from '@angular/core';
import { ReviewService } from '../services/review-services/review.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  protected model: any;
  protected reviewId: any;
  protected review: any;

  constructor(
    private reviewService: ReviewService,
    private route: ActivatedRoute) { }

  /**
  * Uses active route to determine selected reveiw by id
  */
  ngOnInit(): void {
    this.route.params.subscribe((url: any) => {
      this.model = url.model;
      this.reviewId = url.id;
      this.getReview()
    });
  }

  /**
   * Uses Review Service to retrieve review data by id
   */
  getReview(): void {
    this.reviewService.getReviewById(this.reviewId).subscribe((review: any) => {
      this.review = review.data;
    });
  }
}
