import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service';
import { Game } from '../../types/game';
import { Router } from '@angular/router';
import { CartService } from '../../../cart/service/cart.service';
import { Cart } from '../../../cart/types/cart';
import { Customer } from '../../../../../types/customer';
import { GeneralService } from 'src/app/services/general.service';

@Component({
  selector: 'app-main-game',
  templateUrl: './main-game.component.html',
  styleUrls: ['./main-game.component.css'],
})
export class MainGameComponent implements OnInit {
  games: Game[] = [];
  game?: Game;
  cart: Cart[] = [];
  cart_game: Cart = {
    id: 0,
    cart_id: 0,
    customers_id: 0,
    game_id: 0,
    cart_quantity: 0

  }
  get isLoading() {
    return this._gameService.loading;
  }

  constructor(
    private readonly _gameService: GameService,
    private router: Router,
    private _cartService: CartService,
    private _generalService: GeneralService
  ) {}

  ngOnInit(): void {
    this.findAll();
    this.getCustomerId();
  }

  findAll() {
    this._gameService.findAll().subscribe((response) => {
      this.games = response;

    });
  }

  findById(id: number) {
    this._gameService.findById(id).subscribe((response) => {
      this.game = response;
      this._gameService.loading = false;
    });
  }

  getCustomerId() {
    const token = localStorage.getItem('token') + '';
    const decoded = JSON.parse(
      window.atob(token.split('.')[1])
    );
    this._generalService.findById(decoded.id).subscribe((data: any) => {
      this._generalService.cart = data;
    });
  }
  addCart(game: Game) {
    const token = localStorage.getItem('token') + '';
    const decoded = JSON.parse(window.atob(token.split('.')[1]));
    const customerId = decoded.customer
    this.cart_game = {
      id: 0,
     customers_id: customerId,
     game_id: game.game_id,
     cart_quantity: 1
    }
    this._cartService.saveCart(this.cart_game)
    console.log(this.cart_game);
   }
  viewGame(game: Game) {
    console.log(game);
    this.router.navigate(['games/', game.game_id]);
  }

  // findCustomerId(id: number) {
  //   this._cartService.findById(customer_id).subscribe((response) => {
  //     this.
  //   })
  }

