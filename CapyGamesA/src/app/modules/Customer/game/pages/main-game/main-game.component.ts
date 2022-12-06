import { Component, OnInit, ViewChild } from '@angular/core';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort, Sort } from '@angular/material/sort';
import { GameService } from '../../services/game.service';
import { Game } from '../../types/game';

@Component({
  selector: 'app-main-game',
  templateUrl: './main-game.component.html',
  styleUrls: ['./main-game.component.css'],
})
export class MainGameComponent implements OnInit {
  displayedColumns: string[] = [
    '#',
    'name',
    'genre',
    'price',
    'image',
    'description',
    'stock',
    'actions',
  ];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  game!: MatTableDataSource<Game>;

  get isLoading() {
    return this.gameService.loading;
  }

  constructor(
    private readonly gameService: GameService,
    private _liveAnnouncer: LiveAnnouncer,
    public dialog: MatDialog
    ) {}

  ngOnInit() {
    this.getAllGames();
  }

  getAllGames() {
    this.gameService.findAll().subscribe((res) => {
      this.game = new MatTableDataSource<Game>(res);
      this.gameService.loading = false;
      this.game.paginator = this.paginator;
      this.game.sort = this.sort;
    });
  }

  announceSortChange(sort: Sort) {
    if (sort.direction) {
      this._liveAnnouncer.announce(
        `Sorted ${sort.direction} ending.`
      );
    }else{
      this._liveAnnouncer.announce(
        `Sort cleared`
      );
    }
  }

  addToCart(game: Game) {
    console.log(game);
  }
}
