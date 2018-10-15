import React from 'react'
import DayCard from '../components/DayCard'

class DaysList extends React.Component {
  
  render() {
    return (
      <div className='days'>
        {
          this.props.days.map(day =>
            <DayCard
              day={day}
              selectDay={this.props.selectDay}
              id={day.id}
            />
          )
        }
      </div>
    )
  }
}
export default DaysList
