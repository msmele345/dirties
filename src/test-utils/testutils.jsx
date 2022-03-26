import React from 'react'
import {render as rtlRender} from '@testing-library/react'
import {Provider} from 'react-redux'
import {createStore} from 'redux';
import {rootReducer} from "../reducers";

const render = (
    ui,
    {
        initialState = {},
        store = createStore(rootReducer, initialState)
    } = {}
) => {
    const Wrapper  = ({ children }) => <Provider store={store}>{children}</Provider>;

    return rtlRender(ui, { wrapper: Wrapper });
};

export * from '@testing-library/react'
export { render }
