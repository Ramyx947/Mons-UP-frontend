import React from 'react'
import Day from '../components/Day'
import { Route, Switch, Link } from 'react-router-dom'
class DaysList extends React.Component {
  
  render() {
    const { days, selectDay, deselectDay, trip} = this.props
    return (
      <div className='day-list'>
        {
          days.map(day =>
            <div>
              <Link to={`/trips/${trip.id}/days/${day.id}`}>
                <button onClick={() => selectDay(day)}>{day.title}</button>
              </Link>
            </div>
          )
        }

        <Switch>
          <Route path='/trips/:trip_id/days/:id' render={props => <Day day={days.find(d => d.id === parseInt(props.match.params.id, 10))} {...props} />} />
        </Switch>
      </div>
    )
  }
}
export default DaysList
