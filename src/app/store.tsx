import {applyMiddleware, createStore} from '@reduxjs/toolkit';
import thunk from "redux-thunk";
import {rootReducer} from '../reducers';
import {composeWithDevTools} from "redux-devtools-extension";


const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

export {store};

// export type RootReducer = ReturnType<typeof store.getState>;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;