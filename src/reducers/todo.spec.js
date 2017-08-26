import todoReducer from './todo'

describe('Todo Reducer', () => {
	test('returns an initial state', () => {
		const result = todoReducer(undefined, { type: 'ANY' })

		expect(result).toBeDefined()
	})

	test('add a todo', () => {
		const initState = {
			todos: [
				{ id: 1, name: 'Create Static UI', isComplete: true },
				{ id: 2, name: 'Create Initial State', isComplete: false },
				{ id: 3, name: 'Use state to render UI', isComplete: false },
			],
		}
		const newTodo = {
      id: 4,
      name: 'Added todo',
      isComplete: false,
    }
		const expectedState = {
			todos: [
				...initState.todos,
				newTodo,
			],
		}

		const addAction = {
			type: 'ADD',
			payload: newTodo,
		}
		expect(todoReducer(initState, addAction)).toEqual(expectedState)
	})
})
