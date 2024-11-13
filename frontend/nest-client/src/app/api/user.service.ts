import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { User } from '../interfaces/User';
import { Observable } from 'rxjs';
import { UserRepository } from '../repository/user.repository';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  httpClient = inject(HttpClient);
  userRepository = inject(UserRepository);

  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>('http://localhost:3000/users')
    .pipe(
      tap(users => users.forEach(user => this.userRepository.upsertUser(user)))
    )
  }
  
}

