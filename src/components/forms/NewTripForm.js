import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Accordion, Button, Form, Label, Segment, Menu } from 'semantic-ui-react'

import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'

class NewTripForm extends Component {
  state = {
      title: '',
      start_date: '',
      end_date: '',
      country: '',
      city: '',
      difficulty: '',

      dayTitle: '',
      start_point: '',
      end_point: '',
      distance: '',
      accommodation_type: '',
      name: '',
      address: '',

      showDays: false
  }
  
  handleChangeTitle = (e, { value }) => this.setState({ title: value })
  handleChangeStart_date = (e, { value }) => this.setState({ start_date: value })
  handleChangeEnd_date = (e, { value }) => this.setState({ end_date: value })
  handleChangeCountry = (e, { value }) => this.setState({ country: value })
  handleChangeCity = (e, { value }) => this.setState({ city: value })
  handleChangeDifficulty = (e, { value }) => this.setState({ difficulty: value })

  handleChangeDayTitle = (e, { value }) => this.setState({ dayTitle: value })
  handleChangeStart_point = (e, { value }) => this.setState({ start_point: value })
  handleChangeEnd_point = (e, { value }) => this.setState({ end_point: value })
  handleChangeDistance = (e, { value }) => this.setState({ distance: value })

  handleChangeAccommodationType = (e, { value }) => this.setState({ accommodation_type: value })
  handleChangeName = (e, { value }) => this.setState({ name: value })
  handleChangeAddress = (e, { value }) => this.setState({ address: value })


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
          difficulty: this.state.difficulty
        })
      }
    )
    .then(res => res.json())
    .then(trip => 
      fetch('http://localhost:3000/api/v1/days',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            trip_id: trip.id,
            title: this.state.dayTitle,
            start_point: this.state.start_point,
            end_point: this.state.end_point,
            accommodation_type: this.state.accommodation_type,
            name: this.state.name,
            address: this.state.address
          })
        }
      )
    )
    
  }

  toggleShowDays = () => this.setState({ showDays: !this.state.showDays })


  render() {
    const { showDays } = this.state
    const { toggleShowDays } = this

    
    const dayDetails = (
      <Form>
        <Form.Group widths={6}>
          <Form.Input
            label='Title'
            placeholder='Day title'
            value={this.state.dayTitle}
            onChange={this.handleChangeDayTitle}
          />
        </Form.Group>
        <Form.Group widths={2}>
          <Form.Input
            label='Start point'
            placeholder='Start point'
            value={this.state.start_point}
            onChange={this.handleChangeStart_point}
          />
        </Form.Group>
        <Form.Group widths={2}>
          <Form.Input
            label='End point'
            placeholder='End point'
            value={this.state.End_point}
            onChange={this.handleChangeEnd_point}
          />
        </Form.Group>
        <Form.Group widths={2}>
          <Form.Input
            label='Distance'
            placeholder='Distance'
            value={this.state.Distance}
            onChange={this.handleChangeDistance}
          />
        </Form.Group>

        <Form.Group grouped>
          <Label color='blue'> Accommodation type:</Label>
          <Form.Radio
            label='hotel' name='hotel' type='radio' value='hotel'
            checked={this.state.accommodation_type === 'hotel'}
            onChange={this.handleChangeAccommodationType}
          />
          <Form.Radio label='hostel' name='hostel' type='radio' value='hostel'
            checked={this.state.accommodation_type === 'hostel'}
            onChange={this.handleChangeAccommodationType}
          />
          <Form.Radio label='campsite' name='campsite' type='radio' value='campsite'
            checked={this.state.accommodation_type === 'campsite'}
            onChange={this.handleChangeAccommodationType}
          />
        </Form.Group>
      </Form>
    )

    return (
      <Segment> 
      <Form >
        <h2>Create a new trip</h2>
        <Form.Group widths={2}>
            <Form.Input 
                label='Title'
                placeholder='Trip title'
                value={this.state.title}
                onChange={this.handleChangeTitle}
            />
        </Form.Group>
        <Form.Group >
          <Form.Input 
            label='Start date'
            type='date'
            placeholder='Start date (YYYY-MM-DD)'
            onChange={this.handleChangeStart_date}
            value={this.state.start_date}
          />
        </Form.Group>
        <Form.Group >
          <Form.Input
            label='End date'
            type='date'
            placeholder='End date (YYYY-MM-DD)'
            value={this.state.title}
            onChange={this.handleChangeEnd_date}
            value={this.state.end_date}
          />
        </Form.Group>
        <Form.Group >
          <Form.Input
            label='Country'
            placeholder='Country'
            onChange={this.handleChangeCountry}
            value={this.state.country}
          />
        </Form.Group>
          <Form.Group >
          <Form.Input
            label='City'
            placeholder='City'
            onChange={this.handleChangeCity}
            value={this.state.city}
          />
        </Form.Group>

        <Form.Group >
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

          <Accordion as={Menu} vertical>
            <Menu.Item>
              <Accordion.Title
                active={showDays}
                content='Days'
                onClick={toggleShowDays}
              />
              <Accordion.Content active={showDays} content={dayDetails} widths={2}/>
            </Menu.Item>
          </Accordion>

        <Link to='/trips'>
          <Form.Button
            basic color='red'
            type='submit'
            onClick={this.handleOnSubmit}
          >
            Create new trip
        </Form.Button>
        </Link>
        <Link to={'/trips'} >
          <Button color='green'> Back to trips</Button>
        </Link>
      </Form>
      </Segment>
    )
  }
}

export default NewTripForm

       