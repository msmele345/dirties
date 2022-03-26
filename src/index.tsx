import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {colors, createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import {store} from "./app/store";
import {Provider} from "react-redux";

const theme = createTheme({
    palette: {
        primary: {
            main: '#556cd6',
        },
        secondary: {
            main: '#19857b',
        },
        error: {
            main: colors.red.A400,
        },
    },
});

ReactDOM.render(
    <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline/>
        <Provider store={store}>
            <App/>
        </Provider>
    </ThemeProvider>,
    document.querySelector('#root'),
);

reportWebVitals();
