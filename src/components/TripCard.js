import React from 'react'
import {Divider, Card, Image} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

import { SyncLoopHook } from 'tapable';


const TripCard = ({ trip, handleClick }) => {
  console.log("TRIP", trip)
  let imageUrl
  switch (trip.title) {
    case 'Inca Trail - my long awaited holiday':
      imageUrl = 'https://images.unsplash.com/photo-1531065208531-4036c0dba3ca?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f69c7d121f496c1758668e01b08a812b&auto=format&fit=crop&w=600&q=60'
      break
    case 'Everest Base Camp':
      imageUrl = 'https://images.unsplash.com/photo-1515245469645-19dbee02403e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=924ae4b624bfc1795b83b61ef0e6a1dc&auto=format&fit=crop&w=600&q=60'
      break
    case 'Kili adventure':
      imageUrl = 'https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=99949a52de1e203c9990a35a75c222f8&auto=format&fit=crop&w=600&q=60'
      break
    case 'New Zealand holiday':
      imageUrl = 'https://images.unsplash.com/photo-1528988719300-046ff7faf8cb?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5d3769a52aa2d75c4ada7f38e3da6820&auto=format&fit=crop&w=600&q=60'
      break
    case 'Ben Nevis and Glencoe trip ':
      imageUrl = 'https://images.unsplash.com/photo-1527592917574-89e781323349?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=da5fe23282a93c42cab2a5cd08a39875&auto=format&fit=crop&w=600&q=60'
      break
    case 'Carpathian Mountains Trip':
      imageUrl = 'https://images.unsplash.com/photo-1535897556528-5b435dd16dab?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8296d6678a53aa5fd122ac6dfa6a8153&auto=format&fit=crop&w=600&q=60'
      break
    default:
      imageUrl = ''

  }
  return(
    <Card>
      <Card.Content>
         <Link to={`/trips/${trip.id}`}>
     
    <img style={{ width: '100%' }} src={imageUrl} />
      <div className='ui eight wide column'
        key={trip.id}
        onClick={handleClick}
        >
        <Card.Header>
        <span 
        style={{ fontWeight: 'bold', fontSize: '30px' }}>
        {trip.title}
        </span>
        </Card.Header>
            <Card.Description>
            <p> Start date: {trip.start_date}</p>
            <p> End date: {trip.end_date}</p>
            <p> Country: {trip.country}</p>
            <p> City: {trip.city}</p>
            </Card.Description>
      </div>
    </Link>
      </Card.Content>
    </Card>
  )
}
   
export default TripCard
