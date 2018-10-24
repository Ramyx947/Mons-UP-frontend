import React, { Component } from 'react'
import './App.css'
import App from './App'
import TripList from './containers/TripsList'

class HomePage extends Component {
  state={
    
  }
  render () {
    return (
      <div className='home-bg'>
        <h1>HOME PAGE!</h1>
        <TripList />
        <br/>
        
      
      </div>
    )
  }
}

export default HomePage
