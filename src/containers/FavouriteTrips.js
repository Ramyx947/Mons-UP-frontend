import React from 'react'
import TripCard from '../components/TripCard'


class FavouriteTrips extends React.Component{
render(){
  const { removeFromFavoriteTrips, trips} = this.props
  return(
    <div className='ui segment'>
    <div className='ui five column grid'>
    <div className='row'>
    Your Favourite Trips
    {
      trips.map(trip =>
        <TripCard
          trip={trip}
          handleClick={() => removeFromFavoriteTrips(trip.id)}
        />
      )
    }
    
    </div>
    </div>
    </div>
  )
}
}
export default FavouriteTrips
