import {Component, OnInit, ViewChild} from "@angular/core";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {Review} from "../../types/review";
import {MatTableDataSource} from "@angular/material/table";
import {LiveAnnouncer} from "@angular/cdk/a11y";
import {MatDialog} from "@angular/material/dialog";
import {ReviewService} from "../../services/review.service";
import {AddReviewComponent} from "../add-review/add-review-component";

@Component({
  selector: 'app-main-review',
  templateUrl: './main-review.component.html',
  styleUrls: ['./main-review.component.css'],
})
export class MainReviewComponent implements OnInit {
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

  constructor(private readonly reviewService: ReviewService,
              private _liveAnnouncer: LiveAnnouncer,
              public dialog: MatDialog,) {
  }

  ngOnInit() {
    this.findAll();
  }

  findAll() {
    this.reviewService.findAll().subscribe((response) => {
      this.review= new MatTableDataSource<Review>(response);
      this.reviewService.loading = false;
      this.review.paginator = this.paginator;
      this.review.sort = this.sort;
    });
  }



  openDialog(
    enterAnimationDuration: string,
    exitAnimationDuration: string
  ): void {
    const modalRef = this.dialog.open(AddReviewComponent, {
      width: "50%",
      enterAnimationDuration,
      exitAnimationDuration,
    });
    modalRef.afterClosed().subscribe((result: any) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}



