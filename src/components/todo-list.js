import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
	fetchTodos,
	updateTodo,
	removeTodo,
	filterTodos,
} from '../reducers/todo'

const TodoItem = ({ id, name, isCompleted, onToggle, onRemove }) => (
	<li>
		<button className="todo-list__remove" onClick={() => onRemove(id)}>
			x
		</button>
		<label htmlFor="">{name}</label>
		<input
			id={id}
			type="checkbox"
			checked={isCompleted}
			onChange={() => onToggle(id)}
		/>
	</li>
)

class TodoList extends Component {
	componentDidMount() {
		this.props.fetchTodos()
	}

	render() {
		return (
			<div className="todo-list">
				<ul>
					{this.props.todos.map(todo => (
						<TodoItem
							key={todo.id}
							onToggle={this.props.updateTodo}
							onRemove={this.props.removeTodo}
							{...todo}
						/>
					))}
				</ul>
			</div>
		)
	}
}

export default connect(
	(state, ownProps) => ({
		todos: filterTodos(state.app.todos, ownProps.filter),
	}),
	{
		fetchTodos,
		updateTodo,
		removeTodo,
	},
)(TodoList)
