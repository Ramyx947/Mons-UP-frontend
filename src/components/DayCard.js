import React from 'react'
import TripCard from './TripCard'
import Day from './Day'
class DayCard extends React.Component {



  render(){
    const { days, selectedDay } = this.props
    
    return (
      <div className='day-cards'>
        
        {
          days.map((day) =>
          <Day day={day} />
          )
        }

      </div>
    )
  }
}
export default DayCard
