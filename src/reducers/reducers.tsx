import {Todo} from "../api/Api";
import {Potty} from "../features/PottyEvent/PottyEvent";
import {
    ActionTypes,
    FetchPottiesActionType,
    FetchTodosActionType,
    SavePottySuccessActionType
} from "../actions/actionTypes";

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

type PottyAction = FetchPottiesActionType | SavePottySuccessActionType;

export const pottiesReducer = (
    state: Potty[] = [],
    action: PottyAction
) => {
    switch (action.type) {
        case ActionTypes.fetchPotties:
            return action.payload
        case ActionTypes.saveNewPotty:
            return [action.payload, ...state]
        default:
            return state;
    }
};

// export const savePottyReducer