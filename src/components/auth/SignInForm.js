import React from 'react'

import { Header, Button, Form, Icon, Image, Input } from 'semantic-ui-react'

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
      <Form>
        <Form.Field>
          <label> Username:</label>
          <Form.Input 
            id ='usernameInput'
            placeholder='Username'
            margin='normal'
            name='username'
            onChange={(e) => this.setState({username: e.target.value})}
          />
        </Form.Field>
        <Form.Field>
          <label> Password</label>
          <Form.Input 
            id='passwordInput'
            placeholder='Password'
            margin='normal'
            name='password'
            type='password'
          />
        </Form.Field>
         <Button variant='contained' onClick={() => this.props.signIn(this.state.email)}>
            Log In
        </Button>
      </Form>

    )
  }
}
