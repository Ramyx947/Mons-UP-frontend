import React from 'react'
import { Container, Header, Menu, Segment, Icon, Button, Divider } from 'semantic-ui-react'
import { Route, Switch, withRouter } from 'react-router-dom'
import MenuDropDown from './components/MenuDropDown'


import TripsList from './containers/TripsList'
import TripCard from './components/TripCard'
import TripDetails from './components/TripDetails'
import BrowsePublicTrips from './components/BrowsePublicTrips'
import NavBar from './components/NavBar'
import Loading from './components/Loading'
import TripForm from './components/forms/TripForm'
import UpdateTripForm from './components/forms/UpdateTripForm'
import SignInForm from './components/auth/SignInForm'
import SignUpForm from './components/auth/SignUpForm'

import HomePage from './HomePage'

class App extends React.Component {
  state = {
    trips: [],
    currentUser: window.localStorage.getItem('user') ? JSON.parse(window.localStorage.getItem('user')) : undefined,
    selectedTrip: undefined,
    searchTrips: ''
  }


selectTrip = (id) => {
  return this.state.trips.find(trip => trip.id === parseInt(id, 10))
}

deselectTrip = () => {
  this.setState({ selectedTrip: undefined })
}

getTrips = () => {
  return fetch('http://localhost:3000/api/v1/trips')
    .then(resp => resp.json())
    .then(trips => this.setState({ trips }))
}

  componentDidMount=() => {
    this.getTrips()
  }


// filterTrips = () => {
//   this.state.trips.filter( trip =>{
//     const title = trip.title.toLowerCase()
//     const option = trip.option.toLowerCase()
//     const searchTrips = this.state.searchTrips.toLowerCase()

//     return option.includes(searchTrips) || title.includes(searchTrips)
//   })}

// updateSearch= (searchTrips) => {
//   this.setState({searchTrips})
// }

  signIn = (username, password) => {
    console.log(username, password)
    return fetch('http://localhost:3000/api/v1/users/signin', 
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: username
        })
      }
    )
      .then(res => res.json())
      .then(user => {
        
        this.setState({currentUser: user}, 
          () => { 
            window.localStorage.setItem('user', JSON.stringify(user))
            window.location = '/trips'
          }
        )
        
      })
  }

  signOut = ()=>{
    this.setState({currentUser: undefined})
    localStorage.removeItem('token')
  }


  render () {
   
    const { trips, selectedTrip, currentUser} = this.state
    const { selectTrip, deselectTrip, createUser, signIn, signOut } = this

return (
<div className='ui grid container'>
<Container>
  <br/>
  <br/>
<NavBar 
getUser={this.signIn}
currentUser={this.state.currentUser}
signOut={this.signOut}
/>

<div className='trip-details'>
 <Switch>
    <Route exact path='/' render={props => <HomePage  {...props} />} />
    <Route exact path='/users/signIn' render={props => <SignInForm signIn={this.signIn} {...props} />} />
    <Route exact path='/users/signUp' render={props => <SignUpForm signIn={this.signIn} {...props} />} />

    <Route exact path='/users/signOut' render={props => <SignInForm signOut={this.signOut} {...props} />} /> */}
    <Route exact path='/trips/browse_public_trips' render={props => <BrowsePublicTrips signOut={this.signOut} {...props} />} />

    <Route exact path='/trips/new' render={props => <TripForm {...props} />} />
    <Route exact path='/trips/${trip.id}/edit' render={props => <UpdateTripForm {...props} />} />

    <Route exact path='/trips' render={props => <TripsList trips={this.state.trips} selectTrip={this.selectTrip} {...props} />} />
    <Route path='/trips/:id' render={props => <TripDetails trips={this.state.trips} {...props} />} />

    {/* <Route exact path='/users/account' render={props => <Account account={this.account}  {...props} />} /> */}

 </Switch> 
</div>
</Container>
</div>
)
}
}

export default App
