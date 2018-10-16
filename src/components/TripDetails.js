import React from 'react'
import {Button} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

import TripCard from './TripCard'
import DaysList from '../containers/DaysList'



export default class TripDetails extends React.Component {

  state = {
    days: [],
    selectedDay: undefined,
    accommodation: []
  }

  getDays = () => {
    console.log("props at tripDetails", this.props)
    fetch(`http://localhost:3000/api/v1/trips/${this.props.match.params.id}/days`)
      .then(resp => resp.json())
      .then(days => this.setState({days}))
  }
  componentDidMount = () => {
    this.getDays()
  }
  

  // getAccommodation = () => {
  //   return fetch(`http://localhost:3000/api/v1/users/${this.props.user.id}/days/${this.props.day.date}`)
  //   .then(res => resp.json())
  //   .then(day => {
  //     let sortedAccommodation = day.accommodation.sort((accom1, accom2) => {
  //       return (accom1.id -accom2.id)
  //     })
  //     this.setState({accommodation: sortedAccommodation})
  //   })
  //   }
  // }
  // addAccommodation = () => {
  //   return fetch('http://localhost:3000/api/v1/accommodation')
  // }

  selectDay = (day) => {
    this.setState({ selectedDay: day })
  }
  deselectDay = () => {
    this.setState({ selectedDay: undefined })
  }

render(){
  const { trips, match } = this.props 
  const { days, selectedDay} = this.state
  const trip = trips.find(trip => {
    // console.log(trip.id)
    // console.log(match.params.id)
    return trip.id === parseInt(match.params.id)
  }) || {}
  // console.log('tripdetail props:', this.props)
  // console.log('found trip:', trip)

  return(
<div>
    <h2> Trip details</h2>
    <h1>Title: {trip.title}</h1>
    <p> Start date: {trip.start_date}</p>
    <p> End date: {trip.end_date}</p>
    <p> Number of days: {trip.number_days}</p>
    <p> Country: {trip.country}</p>
    <p> City: {trip.city}</p>
    <p> Category: {trip.category}</p>

      <div className='day-list'>

          <DaysList
            trip={trip}
            days={this.state.days}
            selectDay={this.selectDay}
            deselectDay={this.deselectDay}
          />
      </div>

    <div className='buttons'>
        <Link to={'/trips/new'}>
          <Button> Create a new trip</Button>
        </Link>
        <Link to={'/trips/${trip.id}/update'}>
        <Button> Edit trip</Button>
        </Link>
        <Link to={'/trips'} >
        <Button > Back to trips</Button>
        </Link>
    </div>
  </div>
    )
  }
}
