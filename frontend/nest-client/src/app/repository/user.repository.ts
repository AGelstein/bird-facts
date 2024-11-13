import { createStore } from '@ngneat/elf';
import {
    addEntities,
    selectAllEntities,
    selectEntity,
    withActiveId,
    withEntities,
    upsertEntities
  } from '@ngneat/elf-entities';
import { User } from '../interfaces/User';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const store = createStore( 
    { name: 'user' },
  withEntities<User>(),
  withActiveId()
)

@Injectable({ providedIn: 'root' })
export class UserRepository {

    updateUser(user: User) {
        store.update(addEntities(user));
    }

    upsertUser(user: User) {
        store.update(upsertEntities(user))
    }

    selectAllUsers(): Observable<User[]> {
        return store.pipe(selectAllEntities());
    }

    selectUserById(id: number): Observable<User | undefined> {
        return store.pipe(selectEntity(id));
    }

    clearUsers() {
        store.reset();
    }
}

