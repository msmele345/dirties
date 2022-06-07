import {Todo} from "../api/Api";
import {Potty} from "../features/PottyEvent/PottyEvent";

export enum ActionTypes {
    fetchTodos,
    fetchPotties = "POTTIES_API_CALL_SUCCESS",
    saveNewPotty = "NEW_POTTY_SUCCESS"

}

export interface FetchTodosActionType {
    type: ActionTypes.fetchTodos,
    payload: Todo[]
}

export interface FetchPottiesActionType {
    type: ActionTypes.fetchPotties,
    payload: Potty[]
}

export interface SavePottySuccessActionType {
    type: ActionTypes.saveNewPotty,
    payload: Potty
}

