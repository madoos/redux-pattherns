import React from 'react';
import AddTodo from './containers/AddTodo'
import TodoList from './containers/TodoList'
import Footer from './containers/Footer'


/*
class App extends React.Component {
  constructor(props){
    super(props)
    this.todoId = 0
    this.state = {
      todos: [],
      visibilityFilter: this.props.visibilityFilter
    }

  }

  AddTodo(text) {
    const newTodo = { text, completed: false, id: this.todoId++ }
    const todos = this.state.todos.concat(newTodo)

    this.setState({ 
      todos: todos,
    })
  }

  toggleCompleteTodo(id) {
    const todo = this.state.todos[id]
    const isCompleted = !todo.completed
    const updatedTodo = assoc('completed', isCompleted, todo)
    this.setState({ todos: update(id, updatedTodo, this.state.todos)})
  }

  _getVisibleTodos(todos, filter){
    switch(filter){
      case FILTERS.SHOW_COMPLETED:
        return todos.filter(propEq('completed', true))
      case FILTERS.SHOW_ACTIVE:
        return todos.filter(propEq('completed', false))
      default:
        return todos
    }    
  }

  setVisibleTodos(filter){
    this.setState({
      visibilityFilter: filter
    })
  }

 

  render() {
    const { visibilityFilter, todos } = this.state

    return (
      <div>
        <AddTodo
          onAddClick={text => this.AddTodo(text)}
        />
        <TodoList
          todos={this._getVisibleTodos(todos, visibilityFilter)}
          onTodoClick={id => this.toggleCompleteTodo(id)}
        />
        <Footer
          filter={visibilityFilter}
          onFilterChange={filter => this.setVisibleTodos(filter)}
        />
      </div>
    );
  }
}
*/

const App =  () => (
  <div>
    <AddTodo/>
    <TodoList />
    <Footer/>
  </div>
)


export default App;
