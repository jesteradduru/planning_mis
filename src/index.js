import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App/App';
import reportWebVitals from './reportWebVitals';
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunkMiddleWare from "redux-thunk";
import {createLogger} from "redux-logger";
import { getForms, submitForm, generateReport } from "./components/Forms/reducers"
import { signIn } from "./components/Login/reducer"

const logger = createLogger();

const rootReducer = combineReducers({
    getForms, submitForm, signIn, generateReport
})

const store = createStore(rootReducer, applyMiddleware(thunkMiddleWare, logger))

ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>
    , document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
