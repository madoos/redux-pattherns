import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { createEpicMiddleware } from 'redux-observable';


import App from './App';
import reducers from './reducers'
import rootEpic from './epic'
import { fetchTodos } from './actions/todos';

const ObservableMiddleware = createEpicMiddleware()

const store = createStore(
    reducers,
    applyMiddleware(
        logger, 
        thunk,
        ObservableMiddleware
    )
)

ObservableMiddleware.run(rootEpic)

store.dispatch(fetchTodos())



ReactDOM.render(
    <Provider store={store}> <App /></Provider>, 
    document.getElementById('root')
);

