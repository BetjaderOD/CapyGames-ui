import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service';
import { Game } from '../../types/game';
import { Router } from '@angular/router';
import { CartService } from '../../../cart/service/cart.service';

@Component({
  selector: 'app-main-game',
  templateUrl: './main-game.component.html',
  styleUrls: ['./main-game.component.css'],
})
export class MainGameComponent implements OnInit {
  games: Game[] = [];
  game?: Game;

  get isLoading() {
    return this._gameService.loading;
  }

  constructor(
    private readonly _gameService: GameService,
    private router: Router,
    private _cartService: CartService
  ) {}

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this._gameService.findAll().subscribe((response) => {
      this.games = response;
      console.log(response);
    });
  }

  findById(id: number) {
    this._gameService.findById(id).subscribe((response) => {
      this.game = response;
      this._gameService.loading = false;
    });
  }

  //add to cart
  addCart(game: Game) {
    this._gameService.addCart(game);
  }

  viewGame(game: Game) {
    console.log(game);
    this.router.navigate(['games/', game.game_id]);
  }
}
