import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import TokenService from '../../services/token-service'
import './Navbar.css'

export default class Navbar extends Component {
  handleLogoutClick = () => {
		TokenService.clearAuthToken()
  }

  renderLogoutLink() {
    return (
        <Link className='authmenu top'
          onClick={this.handleLogoutClick}
          to='/'>
          Logout
        </Link>
    )
  }

  renderLoginLink() {
    return (
      <div>
        <Link className='authmenu top'
          to='/login'>
          Log in
        </Link>
        <Link className='authmenu bottom'
          to='/register'>
          Register
        </Link>
      </div>
    )
  }

  render() {
    return (
      <nav className="nav">
        {(this.props.location.pathname === '/')? null:
          <>
          <h1>

            <Link className="logo" to={
              TokenService.hasAuthToken() ? "/experiments" : "/"}
            >
              visiri
            </Link>
            </h1>
            {TokenService.hasAuthToken()
              ? this.renderLogoutLink()
              : this.renderLoginLink()
            }
          </>
          }


        </nav>
    )
  }
}
