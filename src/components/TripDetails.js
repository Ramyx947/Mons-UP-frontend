import React from 'react'
import {Button} from 'semantic-ui-react'
import DatePicker from 'react-datepicker'
import moment from 'moment'
import 'react-datepicker/dist/react-datepicker.css'
import TripCard from './TripCard'
import DayCard from './DayCard'
import Day from './Day'


export default class TripDetails extends React.Component {

  state = {
    days: [],
    selectedDay: undefined
  }

  getDays = () => {
    console.log("props at tripDetails", this.props)
    fetch(`http://localhost:3000/api/v1/trips/${this.props.match.params.id}/days`)
      .then(resp => resp.json())
      .then(days => this.setState({ days }))
  }
  componentDidMount = () => {
    this.getDays()
  }

  selectDay = (day) => {
    this.setState({ selectedDay: day })
  }
  deselectDay = () => {
    this.setState({ selectedDay: undefined })
  }

render(){
  const { trips, match } = this.props 
  const trip = trips.find(trip => {
    console.log(trip.id)
    console.log(match.params.id)
    return trip.id === parseInt(match.params.id)
  }) || {}
  console.log('tripdetail props:', this.props)
  console.log('found trip:', trip)

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
  // Links to all the days

  {
    this.state.selectedDay ?
    <Day tripDay={this.state.selectedDay}
      deselectDay={this.deselectDay}
    /> :
    <DayCard  
      days={this.state.days}
      selectDay={this.selectDay}
    />
  }

    <div className='buttons'>
        <Button> Create a new trip</Button>
        <Button> Edit trip</Button>
        <Button> Delete trip</Button>
        <Button> Add trip to calendar</Button>
        <Button > Back to trips</Button>
    </div>
  </div>
    )
  }
}
