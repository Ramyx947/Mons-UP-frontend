import React from 'react'

import { Header, Icon, Image, Input } from 'semantic-ui-react'



export default class SignInForm extends React.Component {
  state = {
    username: '',
    password: ''
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  render () {
    const { username, password } = this.state
    const { handleChange } = this

    return (
      <div>
        <Input
          id='nameInput'
          label='Username'
          value={username}
          onChange={this.handleChange}
          margin='normal'
          name='username'
          color='primary'
        />
        <br />
        <Input
          id='passwordInput'
          label='Password'
          value={password}
          onChange={this.handleChange}
          margin='normal'
          name='password'
          color='primary'
        /> 
        <br />
        <button onClick={() => this.props.signIn(username, password)} variant='contained' color='primary'>
          LOGIN
        </button>
      </div>

    )
  }
}
