import { Component, OnInit } from '@angular/core';
import { Review } from '../../types/review';
import { ReviewService } from '../../services/review.service';
import { DialogRef } from '@angular/cdk/dialog';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review-component.html',
})
export class AddReviewComponent implements OnInit {
  review!: Review;
  positions: any[] = [];
  loadedFile: string | undefined;

  // get edit(){
  //   return this.ReviewServices.edit;
  // }
  constructor(
    private reviewServices: ReviewService,
    public modalRef: DialogRef<AddReviewComponent>
  ) {

  }
  ngOnInit(): void {
    this.review = this.reviewServices.review;
    this.reviewServices.findAll().subscribe((response) => {
      this.positions = response;
    });
  }

  // getByReview(){
  //   this.ReviewServices.
  // }

  saveReview() {
    console.log(this.review);
    // if(this.ReviewServices.edit){
    this.reviewServices.save(this.review).subscribe((response) => {
      console.log(response);
      this.reviewServices.loading = false;
      this.modalRef.close();
    });
    // }
  }
  previewFile(event: any) {
    const { target } = event;
    console.log(target.value);
    const reader = new FileReader();
    reader.readAsDataURL(target.files[0]);
    reader.onloadend = (result) => {
      this.loadedFile = result.target!.result + '';
    };
  }
}
