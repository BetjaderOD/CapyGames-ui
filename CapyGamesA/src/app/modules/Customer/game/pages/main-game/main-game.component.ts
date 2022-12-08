import { Component, OnInit, ViewChild } from '@angular/core';
import { GameService } from '../../services/game.service';
import { Game } from '../../types/game';

@Component({
  selector: 'app-main-game',
  templateUrl: './main-game.component.html',
  styleUrls: ['./main-game.component.css'],
})

export class MainGameComponent implements OnInit {

  get isLoading() {
    return this.gameService.loading;
  }

  constructor(
    private readonly gameService: GameService,
    ) {}

  ngOnInit() {
  }

  addToCart(game: Game) {
    console.log(game);
  }

  viewGame(game: Game) {
    console.log(game);
  }
}
