import React from 'react'
import { Fragment } from 'react'

const NavBar = (props) => {
  return (
    <Fragment>
      <div className='nav-bar'>
        <span className='headerText'> Welcome {props.currentUser.username && `, {props.currentUser.username}`}
        </span>
        <button onClick={props.signOut}>Logout</button>
      </div>
    </Fragment>
  )
}

export default NavBar
