import React from 'react'
import {Button, Container, Grid, GridColumn } from 'semantic-ui-react'
import {Link} from 'react-router-dom'

import TripCard from './TripCard'
import DaysList from '../containers/DaysList'
import Day from './Day'


export default class TripDetails extends React.Component {

  state = {
    days: [],
    selectedDay: undefined,
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

  selectDay = (day) => {
    this.setState({ selectedDay: day })
  }
  deselectDay = () => {
    this.setState({ selectedDay: undefined })
  }

render(){
  const { trips, match } = this.props 
  const { days, selectedDay } = this.state
  const trip = trips.find(trip => {
    // console.log(trip.id)
    // console.log(match.params.id)
    return trip.id === parseInt(match.params.id)
  }) || {}
  // console.log('tripdetail props:', this.props)
  // console.log('found trip:', trip)

  return(
 <div className='trip-details'>
   <Grid>
     <Grid.Row>
          <h2> Trip details:</h2>
          <ul>
            <li><h1>Title: {trip.title}</h1></li>
            <li><p> Start date: {trip.start_date}</p></li>
            <li><p> End date: {trip.end_date}</p></li>
            <li><p> Number of days: {trip.number_days}</p></li>
            <li><p> Country: {trip.country}</p></li>
            <li><p> City: {trip.city}</p></li>
            <li><p> Category: {trip.category}</p></li>
            <li><p> Difficulty: {trip.difficulty}</p></li>
          </ul>
     </Grid.Row>
     <Grid.Row>
        <Grid.Column width={5}> 
          <DaysList
              trip={trip}
              days={this.state.days}
              selectDay={this.selectDay}
          />
       </Grid.Column>
        <Grid.Column>
         {
            selectedDay ?
              <Grid.Row>
                <Day 
                  day={selectedDay}
                  deselectDay={this.deselectDay}
                />
              </Grid.Row>
            :
              <Grid.Row>
                <div />
              </Grid.Row>
          }
        </Grid.Column>
      </Grid.Row>
      <Grid.Row> 
            <div className='buttons'>

                <Link to={'/trips/${trip.id}/update'}>
                  <Button> Edit trip</Button>
                </Link>

                <Link to={`/trips/${trip.id}`}> 
                  <Button> Delete trip</Button>
                </Link>
            </div>
      </Grid.Row>
    </Grid>
    </div>
      )
    }
  }
