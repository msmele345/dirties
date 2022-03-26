import React from "react";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Todo} from "../../api/Api";

type TodoState = {
    todos: Todo[]
}

const initialState: TodoState = {
    todos: []
};


const todosSlice = createSlice({
    name: 'todos',
    initialState: initialState,
    reducers: {
        setTodoData(state, action) {
            return action.payload;
        }
    }
});

export const {setTodoData} = todosSlice.actions;

export default todosSlice.reducer;