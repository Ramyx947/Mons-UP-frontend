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
      <div class="login-page">
        <div class="form">
          <form class="register-form">
            <label> Username:</label>
          <input
            id='nameInput'
            value={username}
            onChange={this.handleChange}
            margin='normal'
            name='username'
            color='primary'
          />
          <br />
          <label> Password:</label>
        <input
          id='password'
          value={password}
          onChange={this.handleChange}
          margin='normal'
          name='password'
          color='primary'
        />
        <br />
        <button onClick={() => this.props.signIn(username, password)}
          variant='contained'
          color='primary'>
          SIGN UP
        </button>
          </form>
        </div>
      </div>
      
    )
  }
}
export default SignUpForm
