import React from 'react'
import TripCard from '../components/TripCard'
import { Button, Container, Grid } from 'semantic-ui-react'


const TripList = ({ trips, selectTrip }) => {
    return (

      <Grid>
        <Grid.Column>  
          <div>
            <div className='trip-list'></div>
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
        </Grid.Column>
      </Grid>

      
    )
}
export default TripList
