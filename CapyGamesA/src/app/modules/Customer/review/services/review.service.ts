import {Injectable} from "@angular/core";
import {Review} from "../types/review";
import {HttpClient} from "@angular/common/http";
import {APP_URL} from "../../../../services/base-url.app";

@Injectable({
  providedIn: 'root'
})
export class ReviewService{
  loading: boolean = false;
  private resena: Review [] = [];
  edit: boolean = false;
    review: Review = {
      id: 0,
      game_id: 0,
      review_date: '',
      review_title: '',
      review_description: '',
      review_rating: 0,
    };

    get reviews(){
      return[...this.resena];
    }

    constructor(private http: HttpClient) {
    }

    findAll(){
      this.loading = true
      return this.http.get<Review[]>(`${APP_URL}reviews`);
    }

    save(review: Review){
      this.loading = true;
      return this.http.post<any>(`${APP_URL}reviews`,review)
    }


};
