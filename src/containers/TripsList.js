import React from 'react'
import TripCard from '../components/TripCard'
import { Button, Container, Grid } from 'semantic-ui-react'


class TripList extends React.Component {
  componentDidMount() {
    this.props.getTrips()
  } 
   render () {
     return (

       <Grid>
         <Grid.Column>
           <div>
             <div className='trip-list'></div>
             {
               this.props.trips.map((trip) =>
                 <TripCard
                   trip={trip}
                   key={trip.id}
                   selectTrip={this.props.selectTrip}
                 />
               )
             }
           </div>
         </Grid.Column>
       </Grid>


     )
   }
  
}
export default TripList
