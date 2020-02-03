import React, { Component } from "react";
import Upload from "../components/Upload/Upload";
import "./UploadPage.css";
import TokenService from "../services/token-service";

export default class UploadPage extends Component {
  static defaultProps = {
    history: {
      push: () => {}
    }
  };
  state = {
    howto: true
  };
  onFinish = () => {
    this.props.history.push("/experiments");
  };
  setHowTo = howto => {
    this.setState({ howto });
  };
  render() {
    return (
      <div className="UploadPage">
        {this.state.howto && (
          <ul className="howto">
            {!TokenService.hasAuthToken() && (
              <li>Click 'Login' to use the demo account</li>
            )}
            <li>Take a picture of the cells you want to count</li>
            <li>
              Mark the image with square boxes containing an individual cell
            </li>
            <li>
              When you are done, click Finished to save and upload the data to
              your collection of experiments
            </li>
          </ul>
        )}
        <Upload onFinish={this.onFinish} setHowTo={this.setHowTo} />
      </div>
    );
  }
}
