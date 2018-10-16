import React from 'react'

const Day = ({ day, }) => {

  return(
    <div className="day-details">
        <h2>{day.title}</h2>
      <h3>Start point:</h3>
        <p>{day.start_point}</p>
      <h3>End point:</h3>
        <p> {day.end_point}</p>
      <h3>Distance:</h3>
        <p> {day.distance}</p>
      <h3>Notes:</h3>
        <p> {day.notes}</p>
      <div>
        
        <button> Edit day </button>
        <button> Delete day </button>
      </div>
    </div>
   
  )
}

export default Day

