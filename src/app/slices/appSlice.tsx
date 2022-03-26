import React from "react";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type AppState = {
    isLoading: boolean
};

const initialState: AppState = {
    isLoading: false
};

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setIsLoading(state, action: PayloadAction<boolean>) {
            return {
                isLoading: action.payload
            }
        }
    }
});

export const {
    setIsLoading
} = appSlice.actions;

export default appSlice.reducer;