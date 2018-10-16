import React, { Component } from 'react'
import { connect } from 'react-redux'
import DayPicker from 'react-day-picker';
import { Button } from 'semantic-ui-react'

import { Link } from 'react-router-dom'

import 'react-day-picker/lib/style.css';
import { withRouter } from 'react-router-dom'

class UpdateTripForm extends Component {
  state = {
   title: '',
   start_date: '',
   end_date: '',
   number_days: '',
   country: '',
   city: ''
  }
  
  handleInputChange = (event) => {
    this.setState({
       title: event.target.children[0].value,
       start_date: event.target.childrem[1].value,
       end_date: event.target.childrem[2].value,
       number_days: event.target.childrem[3].value,
       country: event.target.childrem[4].value,
       city: event.target.childrem[5].value
    })
  }


handleSubmit = (event) => {
event.preventDefault()
this.UpdateTripForm(this.state)
}


  render() {
    const { from, to } = this.state;
    const modifiers = { start: from, end: to };
    return (
      <div> 
       
      <form onSubmit={this.handleOnSubmit}>
          <h2>Update trip</h2>
        <p>
          <label> Title:</label>
          <input
            type='text'
            name='title'
            value={this.state.title}
            onChange={this.handleInputChange}
            placeholder='Trip title'
          />
        </p>
        <p>
          <p> Dates:</p>
          <label> Start date</label>
        <input
          type='date'
          value={this.state.start_date}
          name='start_date'
          onChange={this.handleInputChange}
          placeholder='Start date (YYYY-MM-DD)'
        />
        </p>
        <p>
        <label> End date:</label>
        <input
          type='date'
          value={this.state.end_date}
          name='end_date'
          onChange={this.handleInputChange}
          placeholder='End date (YYYY-MM-DD)'
        />
        </p>
        <p>
        </p>
        <input
          type='text'
          value={this.state.number_days}
          name='number_days'
          onChange={this.handleInputChange}
          placeholder='Total number of days'
        />
        <p>
          <input
            type='text'
            value={this.state.country}
            name='country'
            onChange={this.handleInputChange}
            placeholder='Country'
          />
        </p>
        <p>
          <input
            type='text'
            value={this.state.city}
            name='city'
            onChange={this.handleInputChange}
            placeholder='City'
          />
        </p>
        <input type='submit'
          onClick={(event) => {event.preventDefault()
          this.props.updateTrip()}}
        />
      </form>
        <Link to={'/trips'} >
          <Button > Back to trips</Button>
        </Link>
      </div>
    )
  }
}

export default UpdateTripForm
       