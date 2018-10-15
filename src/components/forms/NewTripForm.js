import React, { Component } from 'react'
import { connect } from 'react-redux'

class NewTripInput extends Component {
  state = {
    username: '',
    email: '',
    password: ''
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  handleOnSubmit = (event) => {
    event.preventDefault()
    this.props.dispatch({ type: 'ADD_USER', user: this.state })
  }

  render() {
    return (
      <form onSubmit={this.handleOnSubmit}>
        <p>
          <input
            type='text'
            id='username'
            onChange={this.handleInputChange}
            placeholder='username'
          />
        </p>
        <p>
          <input
            type='email'
            id='email'
            onChange={this.handleInputChange}
            placeholder='email'
          />
          <input
            type='password'
            id='password'
            onChange={this.handleInputChange}
            placeholder='password'
          />
        </p>
        <input type='submit' />
      </form>
    )
  }
}

export default UserInput
