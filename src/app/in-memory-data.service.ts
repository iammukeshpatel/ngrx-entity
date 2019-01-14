import { InMemoryDbService } from 'angular-in-memory-web-api';
import { User } from './model/user';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const users = [
            { id: 11, name: 'Mukesh' },
            { id: 12, name: 'Rajesh' },
            { id: 13, name: 'Paresh' }
        ];
        return { users };
    }

    // Overrides the genId method to ensure that a hero always has an id.
    // If the heroes array is empty,
    // the method below returns the initial number (11).
    // if the heroes array is not empty, the method below returns the highest
    // hero id + 1.
    genId(users: User[]): number {
        return users.length > 0 ? Math.max(...users.map(user => user.id)) + 1 : 11;
    }
}