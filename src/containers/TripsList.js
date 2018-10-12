import React from 'react'
import TripCard from '../components/TripCard'
import Search from '../components/Search'
class TripList extends React.Component {
  render () {
    return (
      <div className='trips'>
        {
          this.props.trips.map(trip =>
            <TripCard
              trip={trip}
              selectTrip={this.props.selectTrip}
              id={trip.id}
            />
          )
        }
      </div>
    )
  }
}
export default TripList
