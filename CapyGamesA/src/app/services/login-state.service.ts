import { Injectable } from '@angular/core';
import { Session } from '../types/session';

@Injectable({
  providedIn: 'root',
})
export class LoginStateService {
  signinOrsignUp = true;
  private session: Session = {
    logged: true,
  };

  get isLogged() {
    return this.session;
  }

  set setIsLogged(logged: boolean) {
    this.session.logged = logged;
  }

  constructor() {
    this.session.logged = !!localStorage.getItem('token');
  }
}
