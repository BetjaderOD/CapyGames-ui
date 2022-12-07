import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Game } from '../types/game';
import { APP_URL } from 'src/app/services/base-url.app';

@Injectable({
    providedIn: 'root'
})

export class GameService {
    loading: boolean = false;
    private jueg: Game [] = [];
    edit: boolean = false;
    juego: Game = {
        id: 0,
        name: '',
        genre: '',
        price: 0,
        image: '',
        description: '',
        stock: 0,
    };

    get game() {
        return [...this.jueg];
    }

    constructor(private http: HttpClient) {
    }

    findAll() {
        return this.http.get<Game[]>(`${APP_URL}/games`);
    }

    findById(id: number) {
        return this.http.get<Game>(`${APP_URL}/games/${id}`);
    }
}
