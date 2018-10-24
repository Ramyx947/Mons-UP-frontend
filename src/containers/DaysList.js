import React from 'react'
import Day from '../components/Day'
import { Route, Switch, Link } from 'react-router-dom'
import { Accordion, Icon, Grid, GridColumn  } from 'semantic-ui-react'


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
    console.log('DayList props:', this.props)
    return (
      <div className='day-list'>
        <Accordion fluid styled>
        {
          days.map((day, i) =>
              <>
                <Accordion.Title active={activeIndex === i} index={i} onClick={this.handleClick}>
                  <Icon name='dropdown' />
                    {/* <Link to={`/trips/${trip.id}/days/${day.id}`}> */}
                      {day.title}
                    {/* </Link> */}
                  </Accordion.Title>
                  <Accordion.Content active={activeIndex === i}>
                    <Day day={day}/>
                  </Accordion.Content>
              </>

          )
          }
        </Accordion>

        <Switch>
          <Route path='/trips/:trip_id/days/:id' render={props => <Day day={days.find(d => d.id === parseInt(props.match.params.id, 10))} {...props} />} />
        </Switch>
      </div>
    )
  }
}

DaysList.defaultProps = {
  days: []
}
