import React, { Component } from "react";
import { Link } from "react-router-dom";
import TokenService from "../../services/token-service";
import "./Navbar.css";

export default class Navbar extends Component {
  handleLogoutClick = () => {
    TokenService.clearAuthToken();
  };

  renderLogoutLink() {
    return (
      <div className="authmenu">
        <Link className="top" onClick={this.handleLogoutClick} to="/">
          Logout
        </Link>
        <Link className="bottom" to="/experiments">
          Experiments
        </Link>
      </div>
    );
  }

  renderLoginLink() {
    return (
      <div className="authmenu">
        <Link className="top" to="/login">
          Log in
        </Link>
        <Link className="bottom" to="/register">
          Register
        </Link>
      </div>
    );
  }

  render() {
    return (
      <nav className="nav">
        {this.props.location.pathname === "/" ? null : (
          <>
            <h1>
              <Link
                className="logo"
                to={TokenService.hasAuthToken() ? "/experiments" : "/"}
              >
                visiri
              </Link>
            </h1>
            {TokenService.hasAuthToken()
              ? this.renderLogoutLink()
              : this.renderLoginLink()}
          </>
        )}
      </nav>
    );
  }
}
