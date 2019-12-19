import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {combineReducers,createStore,compose,applyMiddleware} from "redux"
import './index.css';
import App from './App';
import PostReducer from "./Store/Reducer/post";
import AuthReducer from "./Store/Reducer/auth";
import registerServiceWorker from './registerServiceWorker';

const composeEnhancers=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer=combineReducers({
    post:PostReducer,
    auth:AuthReducer
    });
const store =createStore(rootReducer,composeEnhancers(
    applyMiddleware(thunk)
));
ReactDOM.render(<Provider>
                <BrowserRouter>
                  <App />
                </BrowserRouter>
                </Provider>, document.getElementById('root'));
registerServiceWorker();
