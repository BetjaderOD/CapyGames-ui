import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { GamesService } from '../../service/games.service';
import { Game } from '../../types/games';
import { AddGamesComponent } from '../add-games/add-games.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main-games',
  templateUrl: './main-games.component.html',
})
export class MainGamesComponent implements OnInit {
  gam: Game[] = [];
  dispalyedColumns: string[] = [
    '#',
    'game_id',
    'game_name',
    'game_genre',
    'game_price',
    'game_image',
    'game_description',
    'game_stock',
    'actions',
  ];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  games!: MatTableDataSource<Game>;

  get isloading() {
    return this.gameService.loading;
  }
  constructor(
    private gameService: GamesService,
    private _liveannouncer: LiveAnnouncer,
    public dialog: MatDialog,
    public route: ActivatedRoute
  ) {
    this.route.params.subscribe((params) => {
      this.gameService.game.game_id = Number(params['id']);
    });
   }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.getAllGames();
    });
  }

  getAllGames() {
    this.gameService.findAll().subscribe((data) => {
      this.games = new MatTableDataSource<Game>(data);
      this.gameService.loading = false;
      this.games.paginator = this.paginator;
      this.games.sort = this.sort;
    });
  }

  announceSortChange(sort: Sort) {
    if (sort.direction) {
      this._liveannouncer.announce(`Sorted ${sort.direction} ending`);
    } else {
      this._liveannouncer.announce(`Sort cleared`);
    }
  }
  openDialog(enterAnimation: string, exitAnimation: string) {

       const modalRef = this.dialog.open(AddGamesComponent, {
         width: '60%',
         enterAnimationDuration: enterAnimation,
         exitAnimationDuration: exitAnimation,
         disableClose: true
      });
       modalRef.afterClosed().subscribe((result: any) => {
         this.getAllGames();
         this.gameService.game = {
           id: 0,
           game_id: 0,
           game_name: '',
           game_genre: '',
           game_price: 0,
           game_image: '',
           game_description: '',
           game_stock: 0,
         };
       });
     }
     editGame(games: Game) {
       this.gameService.game = games;
       //this.gameService.update: true;
       this.openDialog('500ms', '500ms');
     }
  }
  // deleteGame(game: Game) {
  //   this.gameService.delete(1).subscribe((data) => {
  //     this.getAllGames();
  //   });




