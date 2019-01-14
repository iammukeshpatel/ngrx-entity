import { Action } from '@ngrx/store';
import { Update, Predicate, EntityMap } from '@ngrx/entity';

import { User } from '../model/user';

export enum UserActionTypes {
    LOAD_USERS = '[User] Load Users',
    ADD_USER = '[User] Add User',
    UPSERT_USER = '[User] Upsert User',
    ADD_USERS = '[User] Add Users',
    UPSERT_USERS = '[User] Upsert Users',
    UPDATE_USER = '[User] Update User',
    UPDATE_USERS = '[User] Update Users',
    MAP_USERS = '[User] Map Users',
    DELETE_USER = '[User] Delete User',
    DELETE_USERS = '[User] Delete Users',
    DELETE_USERS_BY_PREDICATE = '[User] Delete Users By Predicate',
    CLEAR_USERS = '[User] Clear Users',
}

export class LoadUsers implements Action {
    readonly type = UserActionTypes.LOAD_USERS;

    constructor(public payload: { users: User[] }) { }
}

export class AddUser implements Action {
    readonly type = UserActionTypes.ADD_USER;

    constructor(public payload: { user: User }) { }
}

export class UpsertUser implements Action {
    readonly type = UserActionTypes.UPSERT_USER;

    constructor(public payload: { user: User }) { }
}

export class AddUsers implements Action {
    readonly type = UserActionTypes.ADD_USERS;

    constructor(public payload: { users: User[] }) { }
}

export class UpsertUsers implements Action {
    readonly type = UserActionTypes.UPSERT_USERS;

    constructor(public payload: { users: User[] }) { }
}

export class UpdateUser implements Action {
    readonly type = UserActionTypes.UPDATE_USER;

    constructor(public payload: { user: Update<User> }) { }
}

export class UpdateUsers implements Action {
    readonly type = UserActionTypes.UPDATE_USERS;

    constructor(public payload: { users: Update<User>[] }) { }
}

export class MapUsers implements Action {
    readonly type = UserActionTypes.MAP_USERS;

    constructor(public payload: { entityMap: EntityMap<User> }) { }
}

export class DeleteUser implements Action {
    readonly type = UserActionTypes.DELETE_USER;

    constructor(public payload: { id: string }) { }
}

export class DeleteUsers implements Action {
    readonly type = UserActionTypes.DELETE_USERS;

    constructor(public payload: { ids: string[] }) { }
}

export class DeleteUsersByPredicate implements Action {
    readonly type = UserActionTypes.DELETE_USERS_BY_PREDICATE;

    constructor(public payload: { predicate: Predicate<User> }) { }
}

export class ClearUsers implements Action {
    readonly type = UserActionTypes.CLEAR_USERS;
}

export type UserActionsUnion =
    | LoadUsers
    | AddUser
    | UpsertUser
    | AddUsers
    | UpsertUsers
    | UpdateUser
    | UpdateUsers
    | MapUsers
    | DeleteUser
    | DeleteUsers
    | DeleteUsersByPredicate
    | ClearUsers;
