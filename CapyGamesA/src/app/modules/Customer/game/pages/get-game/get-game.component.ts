import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Game } from '../../types/game';

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
