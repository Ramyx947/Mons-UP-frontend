import React, { Component } from 'react'
import { connect } from 'react-redux'
import DayPicker from 'react-day-picker';
import { Button } from 'semantic-ui-react'

import { Link } from 'react-router-dom'

import 'react-day-picker/lib/style.css';
import { withRouter } from 'react-router-dom'

class NewTripForm extends Component {
  state = {
   title: '',
   start_date: '',
   end_date: '',
   number_days: '',
   country: '',
   city: ''
  }
  // getInitialState() {
  //   return {
  //     from: undefined,
  //     to: undefined,
  //   };
  // }
  // handleDayClick(day) {
  //   const range = DateUtils.addDayToRange(day, this.state);
  //   this.setState(range);
  // }
  // handleResetClick() {
  //   this.setState(this.getInitialState());
  // }
  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
handleStartDateChange(start_date){
  this.setState({ start_date: start_date})
}
  handleOnSubmit = (event) => {
    event.preventDefault()
    fetch('http://localhost:3000/api/v1/trips', 
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          user_id: JSON.parse(localStorage.getItem('user')).id,
          title: this.state.title,
          start_date: this.state.start_date,
          end_date: this.state.end_date,
          number_days: this.state.number_days,
          country: this.state.country,
          city: this.state.city
        })
      }
    )
    .then(res => {
      const data = res.json()
      // go to trips/data.id
    })
  }

  render() {
    const { from, to } = this.state;
    const modifiers = { start: from, end: to };
    return (
      <div> 
        <h2>Create a new trip</h2>
      <form onSubmit={this.handleOnSubmit}>
       
        <p>
          <input
            type='text'
            name='title'
            value={this.state.title}
            onChange={this.handleInputChange}
            placeholder='Trip title'
          />
        </p>
        <input
          type='date'
          value={this.state.start_date}
          name='start_date'
          onChange={this.handleInputChange}
          placeholder='Start date (YYYY-MM-DD)'
        />
        <input
          type='date'
          value={this.state.end_date}
          name='end_date'
          onChange={this.handleInputChange}
          placeholder='End date (YYYY-MM-DD)'
        />
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
        <input type='submit'/>
      </form>
        <Link to={'/trips'} >
          <Button > Back to trips</Button>
        </Link>
      </div>
    )
  }
}

export default NewTripForm
       