import React from 'react'
import Day from '../components/Day'
import { Route, Switch, Link } from 'react-router-dom'
import { List, Accordion, Icon  } from 'semantic-ui-react'

export default class DaysList extends React.Component {
  state = {
    activeIndex: 0
  }
  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

  render() {
        const { days, selectDay, trip} = this.props
        const { activeIndex } = this.state

    return (
      <div className='day-list'>
        {
          days.map(day =>
              
                <Accordion fluid styled>
                <Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleClick}>
                  <Icon name='dropdown' />
                    <Link to={`/trips/${trip.id}/days/${day.id}`}>
                      {day.title}
                    </Link>
                  </Accordion.Title>

                  <Accordion.Content active={activeIndex === 0}>
                    <Day day={day}/>
                  </Accordion.Content>
                  </Accordion>

          )
        }

        <Switch>
          <Route path='/trips/:trip_id/days/:id' render={props => <Day day={days.find(d => d.id === parseInt(props.match.params.id, 10))} {...props} />} />
        </Switch>
      </div>
    )
  }
}

// trip = { trip }
// days = { this.state.days }
// selectDay = { this.selectDay }
// deselectDay = { this.deselectDay }