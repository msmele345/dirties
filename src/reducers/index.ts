import {combineReducers} from "@reduxjs/toolkit";
import appReducer from "../app/slices/appSlice";
import {pottiesReducer, todosReducer} from "./reducers";
import {Todo} from "../api/Api";
import  {Potty} from "../features/PottyEvent/PottyEvent";


export interface StoreState {
    readonly todos: Todo[],
    readonly potties: Potty[],
    readonly app: any //check
}

export const rootReducer = combineReducers<StoreState>({
    todos: todosReducer,
    potties: pottiesReducer,
    app: appReducer
});