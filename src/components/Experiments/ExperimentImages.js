import React, { Component } from "react";
import MarkupContext from "../../contexts/MarkupContext";
import ExperimentApiService from "../../services/experiment-api-service";

export default class ExperimentImages extends Component {
  static contextType = MarkupContext;
  constructor(props) {
    super(props);
    this.state = {
      experimentId: props.experimentId,
      images: null,
      imagesLoaded: false,
      fallbackSrc: null
    };
  }

  async componentDidMount() {
    if (!this.state.images) {
      let images = await this.fetchExperimentImages(this.state.experimentId);
      return this.setState({
        images,
        imagesLoaded: true
      });
    }
  }

  handleImageError = () => {
    if (this.context.fallbackImageSrc) {
      this.setState({ fallbackSrc: this.context.fallbackImageSrc });
    }
  };

  async fetchExperimentImages(experimentId) {
    try {
      return await ExperimentApiService.getExperimentImages(experimentId);
    } catch (err) {
      this.setState({ error: err });
    }
  }
  render() {
    return (
      <>
        {this.state.imagesLoaded && this.state.images.length > 0 && (
          <img
            className="expimage"
            src={
              this.state.fallbackSrc
                ? this.state.fallbackSrc
                : this.state.images[0].image_url
              // this.state.images[0].image_url :
              // this.context.defaultImageSrc
            }
            onError={this.handleImageError}
            alt="Experiment"
          ></img>
        )}
        {this.state.imagesLoaded && this.state.images.length === 0 && (
          <img
            className="expimage"
            src={this.context.defaultImageSrc}
            alt="Experiment"
            onError={this.handleImageError}
          ></img>
        )}
      </>
    );
  }
}
