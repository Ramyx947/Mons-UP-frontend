import React from 'react'


class SignUpForm extends React.Component {
  state = {
    username: undefined,
    email: undefined,
    password: undefined
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  render () {
    const { username, password, email } = this.state

    return (
      <div>
          <input
            id='nameInput'
            label='Name'
            value={username}
            onChange={this.handleChange}
            margin='normal'
            name='username'
            color='primary'
          />
          <br />
          <input
            id='emailInput'
            label='Email'
            value={email}
            onChange={this.handleChange}
            margin='normal'
            name='email'
            color='primary'
          />
        <input
          id='password'
          label='password'
          value={password}
          onChange={this.handleChange}
          margin='normal'
          name='password'
          color='primary'
        />
        <br />
        <button onClick={() => this.props.signIn(username, email, password)}
          variant='contained'
          color='primary'>
          SIGN UP
        </button>
      </div>
      
    )
  }
}
export default SignUpForm
