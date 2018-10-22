import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment, Input } from 'semantic-ui-react'
import { Link } from 'react-router-dom'


export default class SignUpForm extends React.Component {
  state = {
    username: undefined,
    password: undefined
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  render () {
    const { username, password } = this.state

      return (
        <div className='signup-form'>
          <style>{`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 100%;
      }
    `}</style>

          <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450 }}>
              <Header as='h2' color='teal' textAlign='center'>
                Sign Up
        </Header>

              <Form size='large'>
                <Segment stacked>
                  <Form.Input
                    fluid icon='user'
                    iconPosition='left'
                    type="text"
                    id='usernameInput'
                    name='username'
                    placeholder='username'
                    value={username}
                    onChange={this.handleChange}
                  />
                  <Form.Input
                    fluid icon='lock'
                    iconPosition='left'
                    placeholder='Password'
                    type='password'
                  />

                  <Button
                    color='teal'
                    fluid size='large'
                    onClick={() => this.props.signUn(username, password)}>
                    Login
                </Button>
                </Segment>
              </Form>
              <Message>Already registered?
            <Link to='/users/signIn'>
                  <Button>
                    Sign In
                </Button>
                </Link>
              </Message>
            </Grid.Column>
          </Grid>
        </div>
      )
    }
  }
//     return (
//       <div class="login-page">
//         <div class="form">
//           <form class="register-form">
//             <label> Username:</label>
//           <input
//             id='nameInput'
//             value={username}
//             onChange={this.handleChange}
//             margin='normal'
//             name='username'
//             color='primary'
//           />
//           <br />
//           <label> Password:</label>
//         <input
//           id='password'
//           value={password}
//           onChange={this.handleChange}
//           margin='normal'
//           name='password'
//           color='primary'
//         />
//         <br />
//         <button onClick={() => this.props.signIn(username, password)}
//           variant='contained'
//           color='primary'>
//           SIGN UP
//         </button>
//           </form>
//         </div>
//       </div>
      
//     )
//   }
// }

