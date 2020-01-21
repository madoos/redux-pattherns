import React from 'react'
import Todo from './Todo'
import { map } from 'ramda'

const TodoList = ({ todos, onTodoClick }) => (
    <ul>
      {map(
          todo => (<Todo {...todo} key={todo.id} onClick={() => onTodoClick(todo)} />),
          todos
      )}
    </ul>
  );

export default TodoList
