import {Injectable} from "@angular/core";
import {Review} from "../types/review";
import {HttpClient} from "@angular/common/http";
import {APP_URL} from "../../../../services/base-url.app";

@Injectable({
  providedIn: 'root'
})
export class ReviewService{
  loading: boolean = false;
  private rew: Review [] = [];
  edit: boolean = false;
    rev: Review = {
      id: 0,
      date: '',
      title: '',
      description: '',
      rating: 0,
    };

    get review(){
      return[...this.rew];
    }

    constructor(private http: HttpClient) {
    }

    findAll(){
      return this.http.get<Review[]>(`${APP_URL}/review`);
    }

};
