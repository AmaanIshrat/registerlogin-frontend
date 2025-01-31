import { Injectable } from '@angular/core';

import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private API_URL = 'http://localhost:5000/api/auth';

  async register(userData: any) {
    return await axios.post(`${this.API_URL}/register`, userData);
  }

  async login(userData: any) {
    return await axios.post(`${this.API_URL}/login`, userData);
  }

  async logout() {
    return await axios.post(`${this.API_URL}/logout`);
  }
}
