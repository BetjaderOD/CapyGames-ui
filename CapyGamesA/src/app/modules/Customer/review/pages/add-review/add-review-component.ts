import {Component, OnInit} from "@angular/core";
import {Review} from "../../types/review";
import {ReviewService} from "../../services/review.service";
import {DialogRef} from "@angular/cdk/dialog";

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review-component.html'
})
export class AddReviewComponent implements OnInit{
  Review: Review;
  positions: any[]=[];
  loadedFile: string | undefined

  // get edit(){
  //   return this.ReviewServices.edit;
  // }
  constructor(private ReviewServices: ReviewService,
  public modalRef: DialogRef<AddReviewComponent>) {
    this.Review = this.ReviewServices.review;

  }
  ngOnInit() :void{
    this.ReviewServices.findAll()
      .subscribe((response)=> {
        this.positions = response;
      });
  }

  // getByReview(){
  //   this.ReviewServices.
  // }

  saveReview(){
    console.log(this.Review);
    // if(this.ReviewServices.edit){
      this.ReviewServices.update(this.Review)
        .subscribe((response)=>{
          console.log(response)
          this.ReviewServices.loading = false;
          this.modalRef.close();
        })
    // }
  }
  previewFile(event:any){
    const {target} = event;
    console.log(target.value);
    const  reader = new FileReader();
    reader.readAsDataURL(target.files[0]);
    reader.onloadend = (result)=>{
      this.loadedFile = result.target!.result + '';
    }
  }
}
