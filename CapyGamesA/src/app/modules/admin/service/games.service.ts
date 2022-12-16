import { Injectable } from '@angular/core';
import { Game } from '../../Customer/game/types/game';
import { HttpClient } from '@angular/common/http';
import { APP_URL } from 'src/app/services/base-url.app';

@Injectable({
  providedIn: 'root'
})
export class GamesService {
  loading: boolean = false;
  private games: Game[] = [];
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


  get Games() {
    return [...this.games];
  }

  constructor(private http: HttpClient) {
    console.log('Servicio de juegos listo');
   }

  findAll() {
    this.loading = true;
    return this.http.get<Game[]>(`${APP_URL}games/`);
  }
  save(game: Game) {
    this.loading = true;
    return this.http.post<Game[]>(`${APP_URL}games/`, game);
  }
  update(game: Game) {
    this.loading = true;
    return this.http.post<Game[]>(`${APP_URL}games/${game.game_id}`, game);
  }
  delete(id: number) {
    this.loading = true;
    return this.http.delete<Game[]>(`${APP_URL}games/${id}`);
  }

}


