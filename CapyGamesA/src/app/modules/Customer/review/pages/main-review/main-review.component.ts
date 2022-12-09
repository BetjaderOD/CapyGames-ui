import {Component, OnInit, ViewChild} from "@angular/core";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {Review} from "../../types/review";
import {MatTableDataSource} from "@angular/material/table";
import {LiveAnnouncer} from "@angular/cdk/a11y";
import {MatDialog} from "@angular/material/dialog";
import {ReviewService} from "../../services/review.service";

@Component({
  selector: 'app-main-reveiw',
  templateUrl: './main-review.component.html',
  styleUrls: ['./main-review.component.css'],
})
export class MainReviewComponent implements OnInit{
  displayedColumns: string[] = [
  '#',
  'date',
  'title',
  'description',
  'rating',
];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  review!: MatTableDataSource<Review>;
constructor(private readonly reviewService: Review,
  private _liveAnnouncer: LiveAnnouncer,
  public dialog: MatDialog,) {}

  ngOnInit() {
    this.getAllReview();
  }

  getAllReview(){
      this.reviewService.findAll().subscribe((res)=>{
      this.review = new MatTableDataSource<Review>(res);
      this.review.paginator = this.paginator;
      this.review.sort = this.sort;
    });
  }



