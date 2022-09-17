import React from 'react';
import ReactDOM from 'react-dom/client';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers/Changes';
import './index.css';
import App from './component/App';
import 'bootstrap/dist/css/bootstrap.min.css';
// import movies from './reducers/Changes';

const logger = ({dispatch, getState}) => (next) => (action) =>{
  console.log("Action_type = ", action.type );
  next(action);
}
//instead of thunk you can install the thunk package ==> npm i redux-thunk
/*
const thunk = ({dispatch, getState}) => (next) => (action) =>{
  if(typeof action === 'function'){
    action(dispatch);
    return;
  }
  next(action);
}
*/
//const store = createStore(movies);
const ThunkLoggerMiddleware = applyMiddleware(logger, thunk);
const store = createStore(rootReducer, ThunkLoggerMiddleware);
// console.log('store',store);
console.log('STATE', store.getState());

// store.dispatch({
//   type : 'ADD_MOVIES',
//   movies : [{Name:'JAI SHIVAJI JAI BHAVANI'}]
// });

// console.log("NEW STATE", store.getState());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App store={store}/>
  </React.StrictMode>
);
