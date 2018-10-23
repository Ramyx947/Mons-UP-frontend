import React from 'react'
import { Link } from 'react-router-dom'

import { Button, Form, Grid, Input, Image, Header, Segment, Message } from 'semantic-ui-react'



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
    const {signIn, signUp} = this.props
    console.log('SignInForm props:', this.props)
    return (
      <div className='signin-form'>
        
        <style>{`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 100%;
      }
    `}</style>

        <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
          {/* <Image src={monsUpLogo} alt='' /> */}
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' color='teal' textAlign='center'>
              <Image src='/src/monsUpLogo.png' size='small' alt="logo"/> 
              Log-in to your account
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
                  onChange={(e) => this.setState({ username: e.target.value })}
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
                  onClick={() => signIn(username)}
                  >
                    Login
                </Button>
              </Segment>
            </Form>
            <Message>
             New with us ?  
            <Link to='/users/signUp'>
                <Button> 
                  Sign Up
                </Button>
              </Link>
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    )
    }
  }


