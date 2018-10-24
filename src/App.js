import React from 'react'
import { Container, Header, Menu, Segment, Icon, Button, Divider } from 'semantic-ui-react'
import { Route, Switch, withRouter } from 'react-router-dom'
import MenuDropDown from './components/MenuDropDown'
import Loading from './components/Loading'

import TripsList from './containers/TripsList'
import TripCard from './components/TripCard'
import TripDetails from './components/TripDetails'

import NavBar from './components/NavBar'
import MyAccount from './components/MyAccount'
import NewTripForm from './components/forms/NewTripForm'
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
  getUser = (user) => {
    fetch(`http://localhost:3000/users/${user.id}`)
      .then(resp => resp.json())
      .then(data => this.setState({ currentUser: data },
        () => localStorage.setItem('currentUser', data.id)
      ))
  }

  selectTrip = (id) => {
    let trip = this.state.trips.find(trip => trip.id === parseInt(id, 10))
    this.setState({selectedTrip: trip})
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

  componentDidMount= () => {
    this.getTrips()
  }

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
    localStorage.removeItem('currentUser')
  }

  editTrip= (trip) => {
      return fetch(`http://localhost:3000/api/v1/users/${this.state.currentUser.id}/trips/${trip.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ trip })
          .then(res => res.json())
          .then(trip => this.editTripState(trip))
    })
  }

editTripState=(trip) =>{
  const foundTrip = this.state.trips.find(stateTrip => stateTrip.id === trip.id)
  const indexOfTripToChange = this.state.trips.indexOf(foundTrip)
  const newTrips = this.state.trips.slice()
    newTrips.splice(indexOfTripToChange, 1, trip)
  this.setState({trips: newTrips})
}
  removeTrip = (id) => {
    this.setState({ trips: this.state.trips.filter(trip => trip.id !==id)})
    return fetch(`http://localhost:3000/api/v1/trips/${id}`, {
      method: 'DELETE'})
  }

render () {
   
    const { trips, selectedTrip, currentUser} = this.state
    const { selectTrip, deselectTrip, createUser, signIn, signOut, editTrip, removeTrip } = this
  console.log("selectedTRIP", this.state.selectedTrip)
  return (

    <div className='ui grid container'>
      <header> MonsUP </header>
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
            <Route exact path='/users/signIn' render={props => <SignInForm signIn={signIn} {...props} />} />
            <Route exact path='/users/signUp' render={props => <SignUpForm signIn={signIn} {...props} />} />
            <Route exact path='/users/signOut' render={props => <SignInForm signIn={signIn} signOut={this.signOut} {...props} />} />
            <Route exact path='/trips/new' render={props => <NewTripForm {...props} />} />
            <Route exact path='/trips/:id/edit' render={props => <UpdateTripForm trip={selectedTrip} editTrip={editTrip}{...props} />} />
            <Route exact path='/trips' render={props => trips ? <TripsList trips={trips} selectTrip={selectTrip} {...props} /> : <Loading /> }/>
            <Route exact path='/trips/:id' render={props => trips ? <TripDetails trips={trips} removeTrip={removeTrip} {...props} />  : <Loading /> } />
            <Route exact path='/myaccount' render={props => trips ? <MyAccount currentUser={currentUser} trips={trips} {...props} /> : <Loading /> } />
            </Switch> 
        </div>
      </Container>
    </div>
  )
  }
}

export default App
