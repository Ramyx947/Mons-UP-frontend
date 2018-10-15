import React from 'react'
import { Fragment } from 'react'

const logoUrl = 'https://image.shutterstock.com/image-vector/mountain-logo-260nw-502499500.jpg'

const NavBar = (props) => {
  return (
    <Fragment>
      <div className='navWrapper'>
        <br />
        <br />
        <span className='headerText'>Welcome! 
        </span>
        <div className='logo'>
        {/* <img src={logoUrl} className='App-logo' alt='' /> */}
        </div>
        <br/>
        <br />
      </div>
    </Fragment>
  )
}
export default NavBar

  // && `, {currentUser.username}`