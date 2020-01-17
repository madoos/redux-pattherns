import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import App from './App';
import reducers from './reducers'

import { curry } from 'ramda'

const store = createStore(
    reducers,
    applyMiddleware(
        curry((store, dispatch, action) => {
            console.log(dispatch(action))
            console.log('STATE ------------>', store.getState())
        })
    )
)


ReactDOM.render(
    <Provider store={store}> <App /></Provider>, 
    document.getElementById('root')
);

