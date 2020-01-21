import React, { useEffect } from 'react';
import AddTodo from './containers/AddTodo'
import TodoList from './containers/TodoList'
import Footer from './containers/Footer'
import { listTodos } from './actions/todos'
import { connect } from 'react-redux';


// eslint-disable-next-line react-hooks/exhaustive-deps
const App =  ({ dispatch }) => {
  useEffect(() => {
    dispatch(listTodos)
  })

  return <div>
    <AddTodo/>
    <TodoList />
    <Footer/>
  </div>
}

export default connect()(App);
