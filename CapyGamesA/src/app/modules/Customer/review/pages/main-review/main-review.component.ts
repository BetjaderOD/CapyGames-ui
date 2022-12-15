import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { ActivatedRoute } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatDialog } from '@angular/material/dialog';
import { Review } from '../../types/review';
import { ReviewService } from '../../services/review.service';
import { AddReviewComponent } from '../add-review/add-review-component';
import { GameService } from '../../../game/services/game.service';
import { Game } from '../../../game/types/game';
import { GeneralService } from '../../../../../services/general.service';
import { Cart } from '../../../cart/types/cart';

@Component({
  selector: 'app-main-review',
  templateUrl: './main-review.component.html',
  styleUrls: ['./main-review.component.css'],
})
export class MainReviewComponent implements OnInit {
  rev: Review[] = [];
  displayedColumns: string[] = [
    '#',
    'review_title',
    'review_description',
    'review_date',
    'review_rating',
  ];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  reviews!: MatTableDataSource<Review>;

  game?: Game;
  cart?: Cart;

  constructor(
    private readonly reviewService: ReviewService,
    private _liveAnnouncer: LiveAnnouncer,
    private _gameService: GameService,
    private _generalServices: GeneralService,
    public dialog: MatDialog,
    public route: ActivatedRoute
  ) {
    this.route.params.subscribe((params) => {
      this.reviewService.review.game_id = Number(params['id']);
      console.log(params);
    });
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.findById(params['id']);
    });
  }

  findAll() {
    this.reviewService.findAll().subscribe((response) => {
      this.reviews = new MatTableDataSource<Review>(response);
      this.reviewService.loading = false;
      this.reviews.paginator = this.paginator;
      this.reviews.sort = this.sort;
    });
  }

  findById(id: number) {
    this._gameService.findById(id).subscribe((response) => {
      this.game = response[0];
      this._gameService.loading = false;
      console.log(response);
    });
  }

  findByIdCustomer(id: number) {
    const token = localStorage.getItem('token') + '';
    const decoded = JSON.parse(window.atob(token.split('.')[1]));
    console.log(decoded);
    /*
    console.log(token);
    const base64Url = token?.split('.')[1];
    const base64 = base64Url?.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(window.atob(base64!).split('').map(c => {
      return '% ' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    console.log(JSON.parse(jsonPayload));
    */
    this._generalServices.findById(decoded.id).subscribe((data: any) => {
      this.cart = data;
      console.log(data);
    });
  }

  openDialog(enterAnimation: string, exitAnimation: string) {
    // ng g c modules/personal/pages/addPersonal
    const modalRef = this.dialog.open(AddReviewComponent, {
      width: '60%',
      enterAnimationDuration: enterAnimation,
      exitAnimationDuration: exitAnimation,
      disableClose: true,
    });
    modalRef.afterClosed().subscribe((result: any) => {
      this.findAll();
      this.reviewService.review = {
        id: 0,
        customer_id: 0,
        game_id: 0,
        review_date: '',
        review_title: '',
        review_description: '',
        review_rating: 0,
      };
    });
  }
  announceSortChange(sort: Sort) {
    if (sort.direction) {
      this._liveAnnouncer.announce(`Sorted ${sort.direction} ending`);
    } else {
      this._liveAnnouncer.announce(`Sort cleared`);
    }
  }
}
