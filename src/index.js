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
import thunk from "redux-thunk";

const composeEnhancers=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer=combineReducers({
    postReducer:PostReducer,
    authReducer:AuthReducer
  });
const store =createStore(rootReducer,composeEnhancers(
    applyMiddleware(thunk)
));
ReactDOM.render(<Provider store={store}>
                <BrowserRouter>
                  <App />
                </BrowserRouter>
                </Provider>, document.getElementById('root'));
registerServiceWorker();
