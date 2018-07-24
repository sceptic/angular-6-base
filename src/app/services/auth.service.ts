import { Injectable } from '@angular/core';

interface User {
  id: string,
  name: string,
  image: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user: User;

  constructor() { }

  getUser(): User {
    return this.user;
  }

  setUser(user: User) {
    this.user = user;
  }
}
