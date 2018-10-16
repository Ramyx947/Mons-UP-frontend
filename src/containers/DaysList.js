import React from 'react'
import Day from '../components/Day'
import { Route, Switch, Link } from 'react-router-dom'
import {  List } from 'semantic-ui-react'

class DaysList extends React.Component {
  
  render() {
    const { days, selectDay, deselectDay, trip} = this.props
    return (
      <div className='day-list'>
        <List bulleted>
        {
          days.map(day =>
            <div>
            <List.Item> 
            <Link to={`/trips/${trip.id}/days/${day.id}`}>
                <button onClick={() => selectDay(day)}>{day.title}</button>
            </Link>
            </List.Item>
            </div>
          )
        }
        </List>

        <Switch>
          <Route path='/trips/:trip_id/days/:id' render={props => <Day day={days.find(d => d.id === parseInt(props.match.params.id, 10))} {...props} />} />
        </Switch>
      </div>
    )
  }
}
export default DaysList
