import React from 'react'
import Day from '../components/Day'

class DaysList extends React.Component {
  
  render() {
    const { days, selectDay, deselectDay} = this.props
    return (
      <div className='days'>
        {
          this.props.days.map(day =>
            // <Day
            //   day={day}
            //   selectDay={this.props.selectDay}
            // />
            <button onClick={() => selectDay(day)}>{day.title}</button>
          )
        }
      </div>
    )
  }
}
export default DaysList
