import {Todo} from "../api/Api";
import {Potty} from "../features/PottyEvent/PottyEvent";
import {ActionTypes, FetchPottiesActionType, FetchTodosActionType} from "../actions/actionTypes";

//old way
export const todosReducer = (
    state: Todo[] = [],
    action: FetchTodosActionType
) => {
    switch (action.type) {
        case ActionTypes.fetchTodos:
            return action.payload
        default:
            return state;
    }
};

export const pottiesReducer = (
    state: Potty[] = [],
    action: FetchPottiesActionType
) => {
    switch (action.type) {
        case ActionTypes.fetchPotties:
            return action.payload
        default:
            return state;
    }
};