import {FetchTodosAction, Todo} from "../api/Api";
import {ActionTypes} from "../actions/types";

//old way
export const todosReducer = (
    state: Todo[] = [],
    action: FetchTodosAction
) => {
    switch (action.type) {
        case ActionTypes.fetchTodos:
            return action.payload
        default:
            return state;
    }
}