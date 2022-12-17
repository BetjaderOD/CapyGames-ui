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
  cart: Cart = {
    id: 0,
    cart_id: 0,
    customer_id: 0,
    game_id: 0,
    cart_quantity: 0,
  }

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
      //console.log(response);
    });
  }

  addCart(game: Game) {
    
    console.log(game);
    const token = localStorage.getItem('token') + '';
    const decoded = JSON.parse(
      window.atob(token.split('.')[1])
    );

    this.cart = {
      id: 0,
      cart_id: 0,
      customer_id: decoded.id,
      game_id: game.game_id,
      cart_quantity: 1,
    }

    console.log(this.cart);
    
    
    this._gameService.addToCart(this.cart).subscribe((response) => {
      console.log(response);
    })

  }

  viewGame(game: Game) {
    //console.log(game);
    this.router.navigate(['games/', game.game_id]);
  }
}
