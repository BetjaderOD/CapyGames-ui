import {Component, OnInit, ViewChild} from "@angular/core";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort, Sort} from "@angular/material/sort";
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
  rev: Review []=[]
  displayedColumns: string[] = [
    'id',
    'customer_id',
    'game_id',
    'review_date',
    'review_title',
    'review_description',
    'review_rating',

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
    enterAnimation: string,
    exitAnimation: string
  ) {// ng g c modules/personal/pages/addPersonal
    const modalRef = this.dialog.open(AddReviewComponent, {
      width: '60%',
      enterAnimationDuration: enterAnimation,
      exitAnimationDuration: exitAnimation,
      disableClose: true
    });
    modalRef.afterClosed().subscribe((result: any) => {
      this.findAll();
      this.reviewService.review = {
        id: 1,
        customer_id: 1,
        game_id: 1,
        review_date: '',
        review_title: '',
        review_description: '',
        review_rating: 0,
      };
    });
  }
  announceSortChange(sort: Sort) {
    if (sort.direction) {
      this._liveAnnouncer.announce(`Sorted ${ sort.direction } ending`);
    } else {
      this._liveAnnouncer.announce(`Sort cleared`);
    }
  }
}



