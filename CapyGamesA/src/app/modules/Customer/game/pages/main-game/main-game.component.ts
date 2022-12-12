import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service';
import { Game } from '../../types/game';

@Component({
  selector: 'app-main-game',
  templateUrl: './main-game.component.html',
  styleUrls: ['./main-game.component.css'],
})
export class MainGameComponent implements OnInit {
  games: Game[] = [];

  get isLoading() {
    return this._gameService.loading;
  }

  constructor(private readonly _gameService: GameService) {
  }

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this._gameService.findAll().subscribe((response) => {
      this.games = response;
      console.log(response)
    });
  }

  findById(id: number) {
    this._gameService.findById(id).subscribe((response) => {
      this.games = [response];
      this._gameService.loading = false;
    });
  }

  addCart(game: Game) {
    this._gameService.addCart(game);
  }

  viewGame(game: Game) {
    this.findById(game.id);
  }
}
