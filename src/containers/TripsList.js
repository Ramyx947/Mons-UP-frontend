import React from 'react'
import TripCard from '../components/TripCard'
import Search from '../components/Search'
import Trip from '../components/Trip'
class TripList extends React.Component {
  render () {
    return (
      <div className='trips'>
        {
          this.props.trips.map(trip =>
            <TripCard
              trip={trip}
              // selectTrip={this.props.selectTrip}
              // id={trip.id}
              handleClick={() => this.props.selectTrip(trip)}
            />
          )
        }
      </div>
    )
  }
}
export default TripList
