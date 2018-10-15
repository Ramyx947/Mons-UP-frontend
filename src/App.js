import React from 'react'
import { Container, Header, Menu, Segment, Icon, Button, Divider } from 'semantic-ui-react'
import { Route, Switch } from 'react-router-dom'
import MenuDropDown from './components/MenuDropDown'

import TripsList from './containers/TripsList'
import TripCard from './components/TripCard'
import TripDetails from './components/TripDetails'
import SignInModal from './components/auth/SignInModal'
import NavBar from './components/NavBar'
import Loading from './components/Loading'
import HomePage from './HomePage'

class App extends React.Component {
  state = {
    trips: [],
    currentUser: undefined,
    selectedTrip: undefined,
    toggleSideBar: false,
    searchTrips: ''
  }

  // selecting
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
  //view side bar
toggleSideBarVisibility = () => {
  this.setState({toggleSideBar: !this.state.toggleSideBar})
}
// hide side bar
handleSideBar = () => {
  this.setState({ toggleSideBar: false})
}

sideBarButtons (){
  const pageURL = window.location.href
  switch(pageURL){
    case 'http://localhost:3000/api/v1/trips' :
    return (
        <>
          <Menu.Item as='a'>Change trip</Menu.Item>
          <Menu.Item as='a'>Log out</Menu.Item>
        </>
      )
    default:
      return (
        <>
          <Menu.Item as='a'>Home</Menu.Item>
          <Menu.Item as='a'>See all trips</Menu.Item>
          <Menu.Item as='a'>Log out</Menu.Item>
        </>
      )
  }
}

filterTrips = () => {
  this.state.trips.filter( trip =>{
    const title = trip.title.toLowerCase()
    const option = trip.option.toLowerCase()
    const searchTrips = this.state.searchTrips.toLowerCase()

    return option.includes(searchTrips) || title.includes(searchTrips)
  })}

updateSearch= (searchTrips) => {
  this.setState({searchTrips})
}

  render () {
   
    const { trips, selectedTrip, currentUser} = this.state
    const { selectTrip, deselectTrip, createUser } = this

return (
<div className='ui grid container'>
<Container>
<NavBar 
currentUser={this.state.currentUser}
/>

<div className='trip-details'>
 <Switch>
    <Route exact path='/' render={props => <HomePage {...props} />} />
    <Route exact path='/trips' render={props => <TripsList trips={this.state.trips} selectTrip={this.selectTrip} {...props} />} />
    <Route path='/trips/:id' render={props => <TripDetails trips={this.state.trips} {...props} />} />
 </Switch> 
</div>
</Container>
</div>
)
}
}

export default App
