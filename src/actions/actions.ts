import {ActionTypes} from "./types";
import {FetchTodosAction, Todo} from "../api/Api";

export const Action_Types = {

};

export const fetchTodoAction = (
    todos: Todo[]
): FetchTodosAction => ({
    type: ActionTypes.fetchTodos,
    payload: todos
});