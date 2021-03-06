import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Accordion, Button, Form, Label, Segment, Menu } from 'semantic-ui-react'

import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'

class UpdateTripForm extends Component {
 
  state = {
    trip: { days: [] },
    showDays: true
  }

    handleOnSubmit = (title, startDate, endDate, numberDays, country, city, category) => {
        fetch(`http://localhost:3000/api/v1/trips/${this.props.trip.id}`,
        {
          method: 'PATCH',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
            body: JSON.stringify({
              user_id: JSON.parse(localStorage.getItem('user')).id,
              title: this.state.trip.title,
              start_date: this.state.trip.start_date,
              end_date: this.state.endDateValue,
              country: this.state.countryValue,
              city: this.state.cityValue,
              difficulty: this.state.dthis.state.difficultyValue
            }),
        }
        )
        .then(res => res.json())
        .then(day =>
          fetch(`http://localhost:3000/api/v1/days/${this.props.day.id}`,
            {
              method: 'PATCH',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                trip_id: this.props.trip.id,
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

  handleChangeTitle = (e) => {
    const trip = JSON.parse(JSON.stringify(this.state.trip))
    trip.title = e.target.value
    this.setState({ trip })
  }

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
  
  
  toggleShowDays = () => this.setState({ showDays: !this.state.showDays })

  static getDerivedStateFromProps (props) {
    const trip = JSON.parse(JSON.stringify(props.trips.find(trip => trip.id == parseInt(props.match.params.id)) || { days: [] } ))
    trip.days = []
    return { trip }
  }

  render() {
    console.log(this.state)

    const { editTrip, trip, day} = this.props
    const { showDays } = this.state
    const { toggleShowDays } = this

    const dayDetails = (
      <Form>
        {
          this.state.trip.days.map(day => <Form.Input value={day.title}></Form.Input>)
        }
        <Form.Group widths={6}>
          <Form.Input
            label='Title'
            placeholder='Day title'
            value={this.state.trip.day}
            onChange={this.handleChangeTitle}
          />
        </Form.Group>
        <Form.Group widths={2}>
          <Form.Input
            label='Start point'
            placeholder='Start point'
            value={this.state.trip.start_point}
            onChange={this.handleChangeStart_point}
          />
        </Form.Group>
        <Form.Group widths={2}>
          <Form.Input
            label='End point'
            placeholder='End point'
            value={this.state.trip.end_point}
            onChange={this.handleChangeEnd_point}
          />
        </Form.Group>
        <Form.Group widths={2}>
          <Form.Input
            label='Distance'
            placeholder='Distance'
            value={this.state.distance}
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
        <Form.Group widths={2}>
          <Form.Input
            label='Name'
            placeholder='Name'
            value={this.state.name}
            onChange={this.handleChangeName}
          />
        </Form.Group>
        <Form.Group widths={2}>
          <Form.Input
            label='Address'
            placeholder='Address'
            value={this.state.address}
            onChange={this.handleChangeAddress}
          />
        </Form.Group>
      </Form>
    )
    return (
<Segment>
 <Form>
   <div className='form'>
        <h2>Update trip</h2>
       <Form.Group>
          <Form.Input 
            defaultValue={this.state.trip.title} 
            label='title' 
            placeholder='Title' 
            onChange={this.handleChangeTitle} 
          />
        </Form.Group>
        <Form.Group>
          <Form.Input 
            value={this.state.trip.start_date}
            defaultValue={this.state.trip.start_date}
            label='start_date' 
            placeholder='Start date' 
            onChange={this.handleChangeStart_date} 
          />
        </Form.Group>
        <Form.Group>
          <Form.Input 
            defaultValue={this.props.trip.end_date} 
            label='end_date' 
            placeholder='end_date' 
            onChange={this.handleChangeEnd_date} 
          />
        </Form.Group>
       <Form.Group>
          <Form.Input 
            defaultValue={this.props.trip.country} 
            label='country' 
            placeholder='country' 
            onChange={this.handleChangeCountry} 
          />
        </Form.Group>
        <Form.Group>
          <Form.Input 
            defaultValue={this.props.trip.city} 
            label='city' 
            placeholder='city' 
            onChange={this.handleChangeCity} />
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

          <Accordion as={Menu} vertical>
            <Menu.Item>
              <Accordion.Title
                active={showDays}
                content='Days'
                onClick={toggleShowDays}
              />
              <Accordion.Content active={showDays} content={dayDetails} />
            </Menu.Item>
          </Accordion>

        <Link to='/trips'>
        <Form.Button
            basic color='red'
            type='submit'
            onClick={() => this.handleOnSubmit(
              this.state.titleValue,
              this.state.startDateValue,
              this.state.endDateValue,
              this.state.countryValue,
              this.state.cityValue,
              this.state.difficultyValue,

              this.state.dayTitle,
              this.state.start_point,
              this.state.end_point,
              this.state.distance,
              this.state.accommodation_type,
              this.state.name,
              this.state.address
            )}
        >
          Save Trip 
        </Form.Button>
        </Link>
        <Link to={'/trips'} >
          <Button color='green'> Back to trips</Button>
        </Link>
          </div>
      </Form>
  </Segment>   
    )
  }
}

UpdateTripForm.defaultProps = {
  trip: { days: [] },
  days: {}
}

export default UpdateTripForm
