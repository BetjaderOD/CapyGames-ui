import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service';
import { Game } from '../../types/game';
import { Router } from '@angular/router';
import { GeneralService } from 'src/app/services/general.service';
import { CartService } from '../../../cart/service/cart.service';
import { Cart } from '../../../cart/types/cart';
import { Customer } from '../../../../../types/customer';
import { CustomerService } from '../../../../../services/customer.service';

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
    private router: Router
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

  addCart(game: Game) {
    this._gameService.addToCart(game);
  }

  viewGame(game: Game) {
    console.log(game);
    this.router.navigate(['games/', game.game_id]);
  }
}
