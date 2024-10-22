import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  httpClient = inject(HttpClient);

  fetchUsers() {
    return this.httpClient.get('http://localhost:3000/users');
  }
}
