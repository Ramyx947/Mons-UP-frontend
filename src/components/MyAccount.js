// import React from 'react'


// export default class MyAccount extends React.Component {

//   state = {
//     currentUser: undefined,
//     trips: []
//   }

//   componentDidMount = () => {
//     this.props.currentUser.trips.map(trip => {
//       fetch(`http://localhost:3000/api/v1/trips/${trip.id}`)
//         .then(resp => resp.json())
//         .then(data =>
//           this.setState({ trips: [...this.state.trips, data] })
//         )
//     })
//   }

//   render() {
//     return (
//       <div>
//         <h4>My details</h4>
//         <p>Username: {username}</p>
 

//         <h3>Trips:</h3>
//         <h4>User trips:</h4>
//         {this.state.trips.filter(trip =>
//           trip.user_id === this.props.currentUser.id
//         ).map(day =>
//           <div>
//             <p>Day: {day.title}</p>
//             <p>Start point: {day.start_point}</p>
//             <p>End point: {day.end_point}</p>
//           </div>
//       </div>
//     )
//   }
//   }