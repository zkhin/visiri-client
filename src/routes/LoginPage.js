import React, { Component } from "react";
import LoginForm from "../components/LoginForm/LoginForm";
import { Section } from "../components/Utils/Utils";
import "./LoginPage.css";

export default class LoginPage extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {}
    }
  };

  handleLoginSuccess = () => {
    const { history } = this.props;
    const destination = "/experiments";
    history.push(destination);
  };

  render() {
    return (
      <Section className="LoginPage">
        <h2>Login</h2>
        <div className="demo-tip">
          You may also use the demo account credentials: <br />
          <code>
            username: demo <br />
            password: password
          </code>
        </div>
        <LoginForm onLoginSuccess={this.handleLoginSuccess} />
      </Section>
    );
  }
}
