import React from 'react'
import { Link } from 'react-router-dom'
import { Fragment } from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment, Menu } from 'semantic-ui-react'
import TripCard from './TripCard'


import SignInForm from './auth/SignInForm'
// import MyAccount from './components/MyAccount'


class NavBar extends React.Component {

  render() {
  
    const { currentUser, getUser } = this.props

  return (

    <Menu>
          <br/>
      <div >
        {
         this.props.currentUser ? 
                (
                  <div>
                    <h3>{currentUser.username && `Hello, ${currentUser.username}`} </h3>
                      <Link to='/trips'> 
                       <button>See your trips</button>
                      </Link>
                      <Link to='/myaccount'>
                        <button>My Account</button>
                     </Link>
                      <Link to='/users/signOut'>
                          <button onClick={this.props.signOut}>Sign out</button>
                      </Link>
                      <Link to={'/trips/new'}>
                        <button> Create a new trip</button>
                      </Link>
                
                  </div>
  )
:
            (<div>
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

