import {
	getTodosService,
	postTodoService,
	updateTodoService,
  removeTodoService
} from './../helpers/todo-service'
import { showMessage } from './message'

const initStore = {
	todos: [],
	todo: '',
}

export const TODO_LOAD = 'TODO_LOAD'
export const TODO_ADD = 'TODO_ADD'
export const TODO_UPDATE = 'TODO_UPDATE'
export const TODO_REMOVE = 'TODO_REMOVE'
const TODO_CHANGE = 'TODO_CHANGE'

// Reducer
export default (state = initStore, action) => {
	switch (action.type) {
		case TODO_ADD:
			return Object.assign({}, state, {
				todo: '',
				todos: [...state.todos, action.payload],
			})

		case TODO_CHANGE:
			return Object.assign({}, state, { todo: action.payload })

		case TODO_LOAD:
			return Object.assign({}, { todos: [...action.payload] })

		case TODO_UPDATE:
			return Object.assign({}, state, {
				todos: state.todos.map(
					t => (t.id === action.payload.id ? action.payload : t),
				),
			})

    case TODO_REMOVE:
      return Object.assign({}, state, {
        todos: state.todos.filter(
          t => t.id !== action.payload,
        ),
      })

		default:
			return state
	}
}

// Selectors

export function filterTodos(todos, filter) {
  switch (filter) {
    case 'active':
      return todos.filter(t => !t.isCompleted)
    case 'completed':
      return todos.filter(t => t.isCompleted)
    default:
      return todos
  }
}

// Action creators
export function changeTodo(val) {
	return { type: TODO_CHANGE, payload: val }
}

// Async Action creators
export function fetchTodos() {
	return async dispatch => {
		dispatch(showMessage('Loading todos'))
		const todos = await getTodosService()
		dispatch({ type: TODO_LOAD, payload: todos })
	}
}
export function saveTodo(todoName) {
	return async dispatch => {
		dispatch(showMessage('The message is added'))
		const todo = await postTodoService(todoName)
		dispatch({ type: TODO_ADD, payload: todo })
	}
}
export function updateTodo(id) {
  return async (dispatch, getState) => {
    const { todos } = getState().app
    const todo = todos.find(todo => todo.id === id)

    dispatch(showMessage('The todo is updated'))
    const updatedTodo = await updateTodoService({
      ...todo,
      isCompleted: !todo.isCompleted,
    })
		dispatch({ type: TODO_UPDATE, payload: updatedTodo })
  }
}
export function removeTodo(id) {
  return async (dispatch, getState) => {
    const { todos } = getState().app
    const todo = todos.find(todo => todo.id === id)

    dispatch(showMessage('The todo is removed'))
    await removeTodoService({ id: todo.id })
		dispatch({ type: TODO_REMOVE, payload: todo.id })
  }
}
