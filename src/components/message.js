import React from 'react'
import { connect } from 'react-redux'

const Message = ({ message }) => (
  message
		? <div className="message">
				<span className="message__content">{message}</span>
			</div>
		: null
)

export default connect(
  (state) => ({message: state.message})
)(Message)