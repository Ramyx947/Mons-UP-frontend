import React from 'react'
import { Link } from 'react-router-dom'
import { Fragment } from 'react'
import { Button, Menu } from 'semantic-ui-react'

import SignInForm from './auth/SignInForm'


class NavBar extends React.Component {

  render() {
  
    const { currentUser, getUser } = this.props

  return (

  <Menu>
   
          <br/>

          <div>
        <br />
        <br />

        
        
        {
         this.props.currentUser ? 
                (
                  <div> 
                <h3>{currentUser.username && `Hello, ${currentUser.username}`} </h3>
                <button> Menu</button>
                  <Link to='/trips'> 
                      <button>See trips</button>
                  </Link>
                  <Link to='/users/signOut'>
                      <button onClick={this.props.signOut}>Sign out</button>
                  </Link>
                  </div>
                )
             :
            (<div className='dropdown_user_content'>
                <Link to='/users/signIn'>
                <Button> 
                  Sign In 
                </Button>
                </Link>
              <Link to='/users/signUp'>
                <Button> 
                  Sign Up
                </Button>
              </Link>
          </div>)
            }
          </div>
    </Menu>
  )
          }
}
export default NavBar

