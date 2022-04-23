import {Todo} from "../api/Api";
import {Potty} from "../features/PottyEvent/PottyEvent";

export enum ActionTypes {
    fetchTodos,
    fetchPotties = "POTTIES_API_CALL_SUCCESS",

}

export const Dirty_Types = {
    GET_DIRTIES_SUCCESS: "API_CALL_SUCCESS",
    GET_DIRTIES_REQUEST: "API_CALL_REQUEST",
    DIRTIES_ERROR: 'restaurants/restaurants_error'
}


export interface FetchTodosActionType {
    type: ActionTypes.fetchTodos,
    payload: Todo[]
}

export interface FetchPottiesActionType {
    type: ActionTypes.fetchPotties,
    payload: Potty[]
}

