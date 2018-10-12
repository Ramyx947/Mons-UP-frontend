import React from 'react'

const TripCard = ({ trip, deselectTrip, selectTrip, currentUser, showUserData }) =>
    <div onClick={() => selectTrip(trip)} className='trip-card'>
      <h1>Title: {trip.title}</h1>
      <p> Start date: {trip.start_date}</p>
      <p> End date: {trip.end_date}</p>
      <p> Number of days: {trip.number_days}</p>
      <p> Country: {trip.country}</p>
      <p> City: {trip.city}</p>
      <p> Category: {trip.category}</p>
  </div>

export default TripCard
