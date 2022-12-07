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
    name: '',
    genre: '',
    price: 0,
    image: '',
    description: '',
    stock: 0,
  };

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.game.id = params['id'];
      console.log(this.game);

    });
  }
}
