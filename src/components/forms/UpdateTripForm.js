import React, { Component } from 'react'
import { connect } from 'react-redux'
import DayPicker from 'react-day-picker';
import { Button, Form, Label} from 'semantic-ui-react'

import { Link } from 'react-router-dom'

import 'react-day-picker/lib/style.css';
import { withRouter } from 'react-router-dom'

class UpdateTripForm extends Component {

  state = {
    titleValue: this.props.trip.title,
    startDateValue: this.props.trip.start_date,
    endDateValue: this.props.trip.end_date,
    countryValue: this.props.trip.country,
    cityValue: this.props.trip.city,
    categoryValue: this.props.trip.category,
    difficultyValue: this.props.trips.difficulty,
  
  }

    handleOnSubmit = (title, startDate, endDate, numberDays, country, city, category) => {
      event.preventDefault()
        fetch(`http://localhost:3000/api/v1/trips/${trip.id}`,
        {
          method: 'PATCH',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
            body: JSON.stringify({
              user_id: JSON.parse(localStorage.getItem('user')).id,
              title: this.state.titleValue,
              start_date: this.state.startDateValue,
              end_date: this.state.endDateValue,
              country: this.state.countryValue,
              city: this.state.cityValue,
              category: this.state.categoryValue,
              difficulty: this.state.dthis.state.ifficultyValue
            }),
        }
        )
        .then(res => res.json()
        .then(updateTrip => this.setState())
    }

  handleChangeTitle = (e, { value }) => this.setState({ title: value })
  handleChangeStart_date = (e, { value }) => this.setState({ start_date: value })
  handleChangeEnd_date = (e, { value }) => this.setState({ end_date: value })
  handleChangeCountry = (e, { value }) => this.setState({ country: value })
  handleChangeCity = (e, { value }) => this.setState({ city: value })
  handleChangeDifficulty = (e, { value }) => this.setState({ difficulty: value })
 

  render() {

    const { editTrip} = this.props
  
    return (
      

      <Form>
        <h2>Update trip</h2>
       <Form.Group>
          <Form.Input defaultValue={this.props.trip.title} label='title' placeholder='Title' on Change={this.handleChangeTitle} />
        </Form.Group>
        <Form.Group>
          <Form.Input defaultValue={this.props.trip.start_date} label='start_date' placeholder='Start date' on Change={this.handleChangeStart_date} />
        </Form.Group>
        <Form.Group>
          <Form.Input defaultValue={this.props.trip.end_date} label='end_date' placeholder='end_date' on Change={this.handleChangeEnd_date} />
        </Form.Group>
       <Form.Group>
          <Form.Input defaultValue={this.props.trip.country} label='country' placeholder='country' on Change={this.handleChangeCountry} />
        </Form.Group>
        <Form.Group>
          <Form.Input defaultValue={this.props.trip.city} label='city' placeholder='city' on Change={this.handleChangeCity} />
        </Form.Group>
        <Form.Group>
          <Label> Difficulty level:</Label>
            <Form.Radio 
              label='beginner'
              value='beginner'
              checked={this.state.difficulty === 'beginner'}
              onChange={this.handleChangeDifficulty}
            />
            <Form.Radio
              label='moderate'
              value='moderate'
              checked={this.state.difficulty === 'moderate'}
              onChange={this.handleChangeDifficulty}
            />
            <Form.Radio
              label='challenging'
              value='challenging'
              checked={this.state.difficulty === 'challenging'}
              onChange={this.handleChangeDifficulty}
            />
        </Form.Group>

        <Link to='/trips'>
        <Form.Button
          onClick={() => this.handleOnSubmit(this.state.title, )}>
        Save Trip 
        </Form.Button>
        </Link>
        <Link to={'/trips'} >
          <Button color='green'> Back to trips</Button>
        </Link>
      </Form>
    )
  }
}

export default UpdateTripForm
