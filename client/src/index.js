import React from 'react';
import  {render} from 'react-dom';
// bindings for react
import { Provider } from 'react-redux';
//Create Store  from Redux - base
import {createStore, applyMiddleware} from 'redux';
import './index.css';
import App from './components/App';
// combined reducers
import rootReducer from './reducers';

// middleware
import thunk from 'redux-thunk';

import * as serviceWorker from './serviceWorker';



// CreateStore is a function from REDUX - It Creates the Initial Store by passing the Root reducer
// No state is managed, just a store created by passing an all encompassing reducer to the redux createStore fucntion
const store = createStore(rootReducer,applyMiddleware(thunk));

// Provider is a  component given to us by the “react-redux” library. It serves just one purpose : to “provide” the store to its child components.
// Since the provider only makes the store accessible to it’s children, and we would ideally want our entire app to access the store, the most sensible thing to do would be to put our App component within Provider.
render(
 <Provider store = {store}>
    <App />
 </Provider>   
, document.getElementById('root'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
