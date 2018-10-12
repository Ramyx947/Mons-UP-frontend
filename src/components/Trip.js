import React from 'react'
const Trip = ({ trip, selectTrip }) => {
  return(
    <div onClick={() => selectTrip(trip)} className='ui eight wide column'>
    <p> {trip.title}</p>
    </div>
  )
}

export default Trip 
