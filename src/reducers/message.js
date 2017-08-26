import { TODO_ADD, TODO_LOAD, TODO_UPDATE, TODO_REMOVE } from './todo'

const SHOW_MESSAGE = 'SHOW_MESSAGE';

export default (state = '', action) => {
  switch (action.type) {
    case SHOW_MESSAGE:
      return action.payload
    case TODO_ADD:
    case TODO_LOAD:
    case TODO_UPDATE:
    case TODO_REMOVE:
      return ''
    default:
      return state
  }
}

export function showMessage(message) {
  return {type: SHOW_MESSAGE, payload: message}
}
