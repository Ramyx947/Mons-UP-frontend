import React from 'react'
import ReactModalLogin from 'react-modal-login'
import { Header, Icon, Modal, Image } from 'semantic-ui-react'



export default class SignInForm extends React.Component {
  state = {
    email: undefined,
    modalOpen: false
  }

  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => this.setState({ modalOpen: false })

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  render () {
    const { email, password, showModal } = this.state
    const { handleChange } = this

    return (
      <div>
       
        <br />
        <button onClick={() => this.props.getUser(email)} variant='contained' color='primary'>
          LOGIN
        </button>
      </div>

    )
  }
}
