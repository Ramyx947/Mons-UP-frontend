import React from 'react'

import TripCard from '../components/TripCard'

const TripList = ({ trips, selectTrip }) => {
    return (
      <div>
        <h1>TRIP LIST!</h1>
        {
          trips.map((trip) =>   
            <TripCard
              trip={trip}
              key={trip.id}
              handleClick={() => selectTrip(trip)}
            />
          )
        }
      </div>
    )
}
export default TripList
