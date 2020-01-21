import React from 'react';
import AddTodo from './containers/AddTodo'
import TodoList from './containers/TodoList'
import Footer from './containers/Footer'
import { connect } from 'react-redux';
import { pick } from 'ramda';

// eslint-disable-next-line react-hooks/exhaustive-deps
const App =  ({ loading }) => {
  return <div>
    <AddTodo/>
    <TodoList />
    <Footer/>
    {loading && <p>Loading...</p>}
  </div>
}

export default connect(pick(['loading']))(App);
