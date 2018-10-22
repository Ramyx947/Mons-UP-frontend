import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Container, Grid, Form, TextArea } from 'semantic-ui-react'


const Day = ({ day, deselectDay }) => {

  return(
    // console.log('Day props:', this.props)
    <div className="day-details"
      onClick={deselectDay}>
      <Grid>
        <Grid.Row>
         <h2>Day details:{day.title}</h2>
                  <ul>
                    <li> Start Point:{day.start_point}</li>
                    <li> End Point:{day.end_point}</li>
                    <li> Distance: {day.distance}</li>
                    <li> Accommodation Type:{day.accommodation_type}</li>
                    <li> Name: {day.name}</li>
                    <li> Address: {day.address}</li>
                    <li><p>Notes: </p></li>
                  </ul>
                  
                  <Form>
                      <TextArea autoHeight placeholder='Add your notes:' rows={2} />
                  </Form>
          </Grid.Row>
      </Grid>
    </div>
   
  )
}

export default Day

