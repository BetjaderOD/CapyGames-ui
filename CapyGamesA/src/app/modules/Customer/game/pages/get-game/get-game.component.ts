import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Game } from '../../types/game';
import { GameService } from '../../services/game.service';
import { Cart } from '../../../cart/types/cart';

@Component({
  selector: 'app-get-game',
  templateUrl: './get-game.component.html',
  styleUrls: ['./get-game.component.css'],
})
export class GetGameComponent implements OnInit {
  game?: Game;
  cart: Cart = {
    id: 0,
    cart_id: 0,
    customer_id: 0,
    game_id: 0,
    cart_quantity: 0,
  }

  get isLoading() {
    return this._gameservice.loading;
  }
  constructor(
    private route: ActivatedRoute,
    private readonly _gameservice: GameService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.findById(params['id']);
    });
  }

  findById(id: number) {
    this._gameservice.findById(id).subscribe((response) => {
      this.game = response[0];
      this._gameservice.loading = false;
      //console.log(response);
    });
  }

  //add to cart
  addCart(game: Game) {
    const token = localStorage.getItem('token') + '';
    const decoded = JSON.parse(window.atob(token.split('.')[1]));

    this.cart = {
      id: 0,
      cart_id: 0,
      customer_id: decoded.id,
      game_id: game.game_id,
      cart_quantity: 1,
    };

    this._gameservice.addToCart(this.cart).subscribe((response) => {
      console.log(response);
      
    })
  }
}

/*
@Component({
  selector: 'app-get-game',
  templateUrl: './get-game.component.html',
})
export class GetGameComponent implements OnInit {
  game: Game = {
    id: 0,
    game_id: 0,
    game_name: '',
    game_genre: '',
    game_price: 0,
    game_image: '',
    game_description: '',
    game_stock: 0,
  };

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.game.id = params['id'];
      console.log(this.game);

    });
  }
}
*/
