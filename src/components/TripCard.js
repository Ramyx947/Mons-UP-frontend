import React from 'react'

const TripCard = ({ trip, deselectTrip, selectTrip, currentUser, showUserData }) => {
  return <div onClick={() => selectTrip(trip)} className='trip-card' />
}
export default TripCard
