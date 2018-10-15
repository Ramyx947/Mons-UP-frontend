import React from 'react'

const Day = ({ day  }) => {

  return(
    <div className="day-details">
        <h2>{day.title}</h2>
        <p>{day.start_point}</p>
        <p>{day.end_point}</p>
        <p>{day.distance}</p>
        <p>{day.notes}</p>
      <div>
        <button> Edit day </button>
        <button> Delete day </button>
      </div>
    </div>
   
  )
}

export default Day

