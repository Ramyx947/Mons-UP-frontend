import React from 'react'
import { Link } from 'react-router-dom'
import { Fragment } from 'react'
import { Button } from 'semantic-ui-react'

import SignInForm from './auth/SignInForm'


class NavBar extends React.Component {

  state = {
    showNavbar: false
  }
toggleNavbar = () => {
  this.setState({showNavbar: !this.state.showNavbar})
}


  render() {
  
    const { currentUser, getUser } = this.props

  return (
    <Fragment>
   <nav className='nav-bar'>
      <div className='dropdown'>
      <br/>
      <br/>
          <p>{currentUser.username && `Hello, ${currentUser.username}`} </p>
          <div>

         
        <button 
        className='drop-down-button'
        onClick={this.toggleNavbar}> 
        Menu</button>
        {
          this.state.showNavbar && this.props.currentUser? 
           (<div className='dropdown_currentuser_content'>
              
                <Link to='/trips'> 
                    <button>See trips</button>
                </Link>
                <Link to='/signOut'>
                    <button>Sign out</button>
                </Link>
            </div>)
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
      </div>
    </nav>
    </Fragment>
  )
          }
}
export default NavBar

