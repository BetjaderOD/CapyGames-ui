import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Game } from '../types/game';
import { APP_URL } from 'src/app/services/base-url.app';

@Injectable({
    providedIn: 'root'
})

export class GameService {

    loading: boolean = false;
    private juego: Game [] = [];
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
        return [...this.juego];
    }

    constructor(private http: HttpClient) {
        console.log('Servicio de juegos listo');
    }

    findAll() {
        this.loading = true;
        return this.http.get<Game[]>(`${APP_URL}games/`);
    }

    findById(id: number) {
        return this.http.get<Game[]>(`${APP_URL}games/${id}`);
    }

    get Game() {
        return this.juego;
    }

    addToCart(game: Game) {
        this.juego.push(game);
        console.log(this.juego);
    }
}
