import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokensService {

  accessKey = "access-token-key";
  refreshKey = "refresh-token-key";

  constructor() { }

  saveTokens(accessToken: string, refreshToken: string) {
    localStorage.setItem(this.accessKey, accessToken);
    localStorage.setItem(this.refreshKey, refreshToken);
  }

  clearTokens(): void {
    localStorage.removeItem(this.accessKey);
    localStorage.removeItem(this.refreshKey);
  }

  getAccessToken(): string | null {
    return localStorage.getItem(this.accessKey);
  }

  refreshToken(): void {
    // TODO
  }
}
