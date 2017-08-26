import React, { Component } from 'react'
import { connect } from 'react-redux'
import { changeTodo, saveTodo } from '../reducers/todo'

class TodoForm extends Component {
	onSubmit = e => {
		e.preventDefault()
		// console.log(this.props.todo)
		this.props.saveTodo(this.props.todo)
	}
	onInputChange = e => {
		this.props.changeTodo(e.target.value)
	}
	render() {
		const { todo } = this.props
		return (
			<form onSubmit={this.onSubmit}>
				<input type="text" value={todo || ''} onChange={this.onInputChange} />
			</form>
		)
	}
}

export default connect(
	state => ({ todo: state.app.todo }), // mapStateToProps
	{ changeTodo, saveTodo },
)(
	// mapDispatchToProps
	TodoForm,
)
