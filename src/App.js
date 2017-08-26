import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import logo from './logo.svg'
import './App.css'

import TodoForm from './components/todo-form'
import TodoList from './components/todo-list'
import Message from './components/message'
import Footer from './components/footer'

class App extends Component {
	render() {
		return (
			<div className="App">
				<div className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h2>Welcome to React</h2>
				</div>
				<Router>
					<div className="todo-app">
						<Message message="Hello"/>
						<TodoForm />
            <Route path="/:filter?" render={({match}) => (
              <TodoList filter={match.params.filter}/>
            )}>
            </Route>
						<Footer />
					</div>
				</Router>
			</div>
		)
	}
}

export default App
