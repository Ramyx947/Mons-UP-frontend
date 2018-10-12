import React from 'react'

const TripCard = ({ trip, handleClick }) => {
    return(
      <div className='ui column'>
        <div 
          className='ui card'
          key={trip.id}
          onClick={handleClick}
        >

            <h1>Title: {trip.title}</h1>
            <p> Start date: {trip.start_date}</p>
            <p> End date: {trip.end_date}</p>
            <p> Number of days: {trip.number_days}</p>
            <p> Country: {trip.country}</p>
            <p> City: {trip.city}</p>
            <p> Category: {trip.category}</p>
          {/* <button onClick={deselectTrip} > Back to trips</button> */}
       </div>
      </div>
    )
  }

export default TripCard
