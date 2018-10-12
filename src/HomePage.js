import React from 'react'
import { Container } from 'semantic-ui-react'
import MenuDropDown from './components/MenuDropDown'

import TripsList from './containers/TripsList'
import UserCard from './components/UserCard'

import SignInModal from './components/auth/SignInModal'
import TripCard from './components/TripCard'
import NavBar from './components/NavBar'

class HomePage extends React.Component {
  state = {
    users: [],
    trips: [],
    days: [],
    currentUser: undefined,
    showUserData: false,
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
  }
  render () {
    const { trips, selectedTrip, currentUser, showUserData } = this.state
    const {
      selectTrip, deselectTrip, getUser, signIn, signOut, openModal, createUser
    } = this

    return (
      <div>
        <MenuDropDown />
        <Container>
          <div className='top-banner'>
            { currentUser
              ? <NavBar currentUser={currentUser} />
              : <SignInModal
                getUser={getUser}
                signIn={signIn}
                signOut={signOut}
                openModal={openModal}
                createUser={createUser}
              />
            }
          </div>
          {
            selectedTrip
              ? <TripCard
                trip={selectedTrip}
                deselectTrip={deselectTrip}
                currentUser={currentUser}
                selectedTrip={selectedTrip}
                showUserData={showUserData}
              />
              : <TripsList
                trips={trips}
                selectTrip={selectTrip}
              />
          }
          {(showUserData === true) ? <UserCard /> : null}
        </Container>
      </div>
    )
  }
}
export default HomePage
