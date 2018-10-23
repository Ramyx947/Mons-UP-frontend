import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment, Input } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
// const monsUpLogo = require('../src/images/monsUpLogo.png')
// const monsUpLogo = require('../images/monsUpLogo.png')
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
          {/* <Image src={monsUpLogo} alt='' /> */}
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
  