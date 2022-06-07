import {Potty} from "../features/PottyEvent/PottyEvent";
import {ActionTypes, FetchPottiesActionType, SavePottySuccessActionType} from "./actionTypes";


export const savePottySuccess = (
    potty: Potty
): SavePottySuccessActionType => ({
    type: ActionTypes.saveNewPotty,
    payload: potty
});

export const fetchPottiesAction = (
    potties: Potty[]
): FetchPottiesActionType => ({
    type: ActionTypes.fetchPotties,
    payload: potties
});