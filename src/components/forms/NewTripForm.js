import React, { Component } from 'react'
import { connect } from 'react-redux'
import DayPicker from 'react-day-picker';
import { Button, Form, Label } from 'semantic-ui-react'

import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'

class NewTripForm extends Component {
  state = {
      title: '',
      start_date: '',
      end_date: '',
      country: '',
      city: '',
      category: '',
      difficulty: ''
  }
  
  handleChangeTitle = (e, { value }) => this.setState({ title: value })
  handleChangeStart_date = (e, { value }) => this.setState({ start_date: value })
  handleChangeEnd_date = (e, { value }) => this.setState({ end_date: value })
  handleChangeCountry = (e, { value }) => this.setState({ country: value })
  handleChangeCity = (e, { value }) => this.setState({ city: value })
  handleChangeDifficulty = (e, { value }) => this.setState({ difficulty: value })


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
          country: this.state.country,
          city: this.state.city,
          difficulty: this.props.trips.difficulty
        })
      }
    )
    .then(res => {
      const data = res.json()
      // go to trips/data.id
    })
  }
  

  render() {
    
    return (
      <Form onSubmit={this.handleOnSubmit}>
        <h2>Create a new trip</h2>
        <Form.Group>
            <Form.Input 
                label='Title'
                placeholder='Trip title'
                value={this.state.title}
                onChange={this.handleChangeTitle}
            />
        </Form.Group>
        <Form.Group>
          <Form.Input 
            label='Start date'
            type='date'
            placeholder='Start date (YYYY-MM-DD)'
            onChange={this.handleChangeStart_date}
            value={this.state.start_date}
          />
        </Form.Group>
        <Form.Group>
          <Form.Input
            label='End date'
            type='date'
            placeholder='End date (YYYY-MM-DD)'
            value={this.state.title}
            onChange={this.handleChangeEnd_date}
            value={this.state.end_date}
          />
        </Form.Group>
        <Form.Group>
          <Form.Input
            label='Country'
            placeholder='Country'
            onChange={this.handleChangeCountry}
            value={this.state.country}
          />
        </Form.Group>
        <Form.Group>
          <Form.Input
            label='City'
            placeholder='City'
            onChange={this.handleChangeCity}
            value={this.state.city}
          />
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
            basic color='blue'
            type='submit'
          >
            Create new trip
        </Form.Button>
        </Link>
        <Link to={'/trips'} >
          <Button color='green'> Back to trips</Button>
        </Link>
      </Form>
    )
  }
}

export default NewTripForm

       