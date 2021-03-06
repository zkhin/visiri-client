import React, { Component } from "react";
import { Button, Input, Required } from "../Utils/Utils";
import AuthApiService from "../../services/auth-api-service";
import "./RegistrationForm.css";

export default class RegistrationForm extends Component {
  static defaultProps = {
    onRegistrationSuccess: () => {}
  };

  state = {
    error: null,
    success: null
  };

  handleSubmit = ev => {
    ev.preventDefault();
    const { full_name, user_name, password } = ev.target;

    AuthApiService.postRegister({
      full_name: full_name.value,
      user_name: user_name.value,
      password: password.value
    })
      .then(user => {
        full_name.value = "";
        user_name.value = "";
        password.value = "";
        this.setState({ success: "You have successfully registered" });
        this.props.onRegistrationSuccess(user.user_name);
      })
      .catch(res => {
        this.setState({ error: res.error });
      });
  };

  render() {
    const { error, success } = this.state;
    return (
      <form className="RegistrationForm" onSubmit={this.handleSubmit}>
        <div role="alert">{error && <p className="red">{error}</p>}</div>
        <div role="alert">{success && <p className="white">{success}</p>}</div>
        <div className="full_name">
          <label htmlFor="RegistrationForm__full_name">Full name</label>
          <Input
            name="full_name"
            type="text"
            id="RegistrationForm__full_name"
            autoCapitalize="none"
          ></Input>
        </div>
        <div className="user_name">
          <label htmlFor="RegistrationForm__user_name">
            User name <Required />
          </label>
          <Input
            name="user_name"
            type="text"
            required
            id="RegistrationForm__user_name"
            autoCapitalize="none"
          ></Input>
        </div>
        <div className="password">
          <label htmlFor="RegistrationForm__password">
            Password <Required />
          </label>
          <Input
            name="password"
            type="password"
            required
            id="RegistrationForm__password"
          ></Input>
        </div>
        <Button className="menu" type="submit">
          Register
        </Button>
      </form>
    );
  }
}
