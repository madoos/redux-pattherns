import { combineEpics } from "redux-observable"
import {fetchTodos, toggleTodo, addTodo } from "./todo"

export default combineEpics(fetchTodos, toggleTodo, addTodo)