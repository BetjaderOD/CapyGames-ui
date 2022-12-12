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
      date: '',
      title: '',
      description: '',
      rating: 0,
    };

    get reviews(){
      return[...this.resena];
    }

    constructor(private http: HttpClient) {
    }

    findAll(){
      this.loading = true
      return this.http.get<Review[]>(`${APP_URL}review`);
    }

    save(review: Review){
      this.loading = true;
      return this.http.post<Review>(`${APP_URL}review/`,review)
    }
  update(review: Review) {
    this.loading = true;
    return this.http.put<Review>(`${ APP_URL }review/`,review);
  }
};
