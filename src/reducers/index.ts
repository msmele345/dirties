import {combineReducers} from "@reduxjs/toolkit";
import appReducer from "../app/slices/appSlice";
import {todosReducer} from "./reducers";
import {Todo} from "../api/Api";


export interface StoreState {
    readonly todos: Todo[],
    readonly app: any //check
}

export const rootReducer = combineReducers<StoreState>({
    todos: todosReducer,
    app: appReducer
});