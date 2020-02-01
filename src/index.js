import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';
import { createStore } from "redux";
import { Provider } from 'react-redux';
import {contactReducer,initialState} from "./redux/reducers/contactReducer";

const store = createStore(contactReducer,initialState);

console.log("INITIAL STATE: ", store.getState())

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));

serviceWorker.unregister();
