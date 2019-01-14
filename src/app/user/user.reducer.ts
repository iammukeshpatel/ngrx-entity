import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { User } from '../model/user';
import { UserActionsUnion, UserActionTypes } from './user.action';
import { createSelector, createFeatureSelector } from '@ngrx/store';

export interface State extends EntityState<User> {
    // additional entities state properties
    // selectedUserId: number | null;
}

export const adapter: EntityAdapter<User> = createEntityAdapter<User>();

const defaultPizza = {
    ids: [1],
    // selectedUserId: 1,
    entities: {
        1: {
            id: 1,
            size: 'Mukesh'
        }
    }
};
export const initialState: State = adapter.getInitialState(defaultPizza);

export function reducer(state = initialState, action: UserActionsUnion): State {
    switch (action.type) {
        case UserActionTypes.ADD_USER: {
            return adapter.addOne(action.payload.user, state);
        }

        case UserActionTypes.UPSERT_USER: {
            return adapter.upsertOne(action.payload.user, state);
        }

        case UserActionTypes.ADD_USERS: {
            return adapter.addMany(action.payload.users, state);
        }

        case UserActionTypes.UPSERT_USERS: {
            return adapter.upsertMany(action.payload.users, state);
        }

        case UserActionTypes.UPDATE_USER: {
            return adapter.updateOne(action.payload.user, state);
        }

        case UserActionTypes.UPDATE_USERS: {
            return adapter.updateMany(action.payload.users, state);
        }

        case UserActionTypes.MAP_USERS: {
            return adapter.map(action.payload.entityMap, state);
        }

        case UserActionTypes.DELETE_USER: {
            return adapter.removeOne(action.payload.id, state);
        }

        case UserActionTypes.DELETE_USERS: {
            return adapter.removeMany(action.payload.ids, state);
        }

        case UserActionTypes.DELETE_USERS_BY_PREDICATE: {
            return adapter.removeMany(action.payload.predicate, state);
        }

        case UserActionTypes.LOAD_USERS: {
            return adapter.addAll(action.payload.users, state);
        }

        case UserActionTypes.CLEAR_USERS: {
            return adapter.removeAll({ ...state, selectedUserId: null });
        }

        default: {
            return state;
        }
    }
}

// export const getSelectedUserId = (state: State) => state.selectedUserId;

export const getUserState = createFeatureSelector<State>('user');

// get the selectors
export const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal,
} = adapter.getSelectors(getUserState);

// select the array of user ids
export const selectUserIds = selectIds;

// select the dictionary of user entities
export const selectUserEntities = selectEntities;

// select the array of users
export const selectAllUsers = selectAll;

// select the total user count
export const selectUserTotal = selectTotal;

export const selectUserState = createFeatureSelector<State>('users');

// export const selectCurrentUserId = createSelector(
//     selectUserState,
//     getSelectedUserId
// );

// export const selectCurrentUser = createSelector(
//     selectUserEntities,
//     selectCurrentUserId,
//     (userEntities, userId) => userEntities[userId]
// );
