
import { Component, OnInit } from '@angular/core';
import { Game } from '../../types/games';
import { DialogRef } from '@angular/cdk/dialog';
import { GamesService } from '../../service/games.service';
import { ReviewService } from '../../../Customer/review/services/review.service';

@Component({
  selector: 'app-add-games',
  templateUrl: './add-games.component.html',
})
export class AddGamesComponent implements OnInit {
  games!: Game;
  positions: any[] = [];
  loadedFile: string = '';

  get edit() {
    return this.gameService.update
  }

  constructor(
    private gameService: GamesService,
    public modalRef: DialogRef<AddGamesComponent>
  ) {
    //this.games = this.GamesService.games;
  }

  ngOnInit(): void {
    console.log(this.games);
    this.gameService.findAll().subscribe((response) => {
      this.positions = response;
    })
  }


  saveGame() {
    console.log(this.games)
    // if (this.gameService.update) {
    this.gameService.save(this.games).subscribe((response) => {
      console.log(response);
      this.gameService.loading = false;
      this.modalRef.close();
    });

  }
}







