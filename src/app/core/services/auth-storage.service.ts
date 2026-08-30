import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';

const JWT_STORAGE_KEY = 'liftiq_jwt_token';

/**
 * Persists the JWT via @capacitor/preferences rather than localStorage, so
 * it survives between app launches on iOS and Android (see architecture
 * doc section 4.2).
 */
@Injectable({ providedIn: 'root' })
export class AuthStorageService {
  async setToken(token: string): Promise<void> {
    await Preferences.set({ key: JWT_STORAGE_KEY, value: token });
  }

  async getToken(): Promise<string | null> {
    const { value } = await Preferences.get({ key: JWT_STORAGE_KEY });
    return value;
  }

  async clearToken(): Promise<void> {
    await Preferences.remove({ key: JWT_STORAGE_KEY });
  }

  async hasToken(): Promise<boolean> {
    return (await this.getToken()) !== null;
  }
}
