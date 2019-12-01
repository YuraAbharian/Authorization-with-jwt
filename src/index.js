import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from "react-redux";
import state from "./Redux/store";
import {BrowserRouter} from "react-router-dom";



ReactDOM.render(
    <BrowserRouter>
    <Provider store={state}>
    <App />
    </Provider>
    </BrowserRouter>
    , document.getElementById('root'));
