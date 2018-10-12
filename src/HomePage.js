import React from 'react'
import { Container } from 'semantic-ui-react'
import { Route, Switch } from 'react-router-dom'
import MenuDropDown from './components/MenuDropDown'

import TripsList from './containers/TripsList'
import UserCard from './components/UserCard'
import FavouriteTrips from './containers/FavouriteTrips'
import SignInModal from './components/auth/SignInModal'
import TripCard from './components/TripCard'
import NavBar from './components/NavBar'

class HomePage extends React.Component {
  state = {
    users: [],
    trips: [],
    days: [],
    favTrips: [],
    currentUser: undefined,
    searchTrips: '',
    selectedTrip: undefined
  }

  // selecting
selectTrip = (trip) => {
  this.setState({ selectedTrip: trip })
}
deselectTrip = () => {
  this.setState({ selectedTrip: undefined })
}

// fetch users, trips
getUsers = () => {
  return fetch('http://localhost:3000/api/v1/users')
    .then(resp => resp.json())
    .then(users => this.setState({ users }))
}
getTrips = () => {
  return fetch('http://localhost:3000/api/v1/trips')
    .then(resp => resp.json())
    .then(trips => this.setState({ trips }))
}

  getDays = () => {
    return fetch('http://localhost:3000/api/v1/days')
      .then(resp => resp.json())
      .then(days => this.setState({ days }))
  }

  componentDidMount=() => {
    this.getUsers()
    this.getTrips()
    this.getDays()
  }
  updateFavoriteTrips=(selectedTrip) =>{
    if (!this.state.favTrips.includes(selectedTrip)){
      this.setState({favTrips: [...this.state.favTrips, selectedTrip]})
    }
  }

  removeFromFavoriteTrips=(id) => {
    const favTrips = this.state.favTrips.fileter(favTrip => favTrip.id !== id)
    this.setState({favTrips})
  }
  render () {
    const { trips, selectedTrip, currentUser, favTrips } = this.state
    const {
      selectTrip, deselectTrip, getUser, signIn, signOut, openModal, createUser, updateFavoriteTrips, removeFromFavoriteTrips
    } = this

    return (
      <div>
        
        <Container>
          <div className='trip-details'>
          {
            selectedTrip
              ? <TripCard
                trip={selectedTrip}
                deselectTrip={deselectTrip}
                currentUser={currentUser}
                selectedTrip={selectedTrip}
                updateFavoriteTrips={updateFavoriteTrips}
             
              />
              // && <MenuDropDown />
              : <TripsList
                trips={trips}
                selectTrip={selectTrip}
              />
          }
          {/* <Switch>
            <Route exact path='/trips' component={props => <TripsList trips={trips} selectTrip={this.selectTrip}{...props} />} />
            <Route exact path='/trip/:title' component={props => <TripCard trips={trips} deselectTrip={this.deselectTrip}{...props} />} />
          </Switch> */}
          <div className='row'>
              <FavouriteTrips
                trips={favTrips}
                removeFromFavoriteTrips={removeFromFavoriteTrips}
              />
          </div>
            
          </div>
        </Container>
      </div>
    )
  }
}
export default HomePage
