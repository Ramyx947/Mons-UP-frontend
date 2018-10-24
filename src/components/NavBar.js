import React from 'react'
import { Link } from 'react-router-dom'
import { Fragment } from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment, Menu } from 'semantic-ui-react'
import TripCard from './TripCard'
import SignInForm from './auth/SignInForm'
const monsUpLogo = require('../images/monsUpLogo.png')
// import MyAccount from './components/MyAccount'


class NavBar extends React.Component {

  render() {
    
    const { currentUser, getUser } = this.props

  return (

    <Menu>
        
      <div className='nav'>
        {
         this.props.currentUser ? 
                (
                  <div className='logo'>
                    <Image src={monsUpLogo} alt='' />
                    <h3>{currentUser.username && `Hello, ${currentUser.username}`} </h3>
                    <Button.Group>
                      <Link to='/trips'> 
                         <Button basic color='red'>See your trips</Button>
                      </Link>
                      <Link to={'/trips/new'}>
                        <Button basic color='blue'> Create a new trip</Button>
                      </Link>
                      <Link to='/users/signOut'>
                        <Button onClick={this.props.signOut} basic color='green'>Sign out</Button>
                      </Link>
                  </Button.Group>
                  </div>
  )
:
            (<div>
                <p> Please sign in/ Sign up</p>
          </div>)
            }
          </div>
    </Menu>
  )
          }
}
export default NavBar

