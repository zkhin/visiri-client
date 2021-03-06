import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Landing.css";

export default class Landing extends Component {
  render() {
    return (
      <section className="Landing">
        <div className="splash">
          <img src="/Completed 2.jpg" alt="Visiri" />
        </div>
        <div className="landing-menu">
          <Link to="/register" className="menu">
            Register
          </Link>
          <Link to="/login" className="menu">
            Login
          </Link>
          <Link className="menu" to="/upload">
            Demo
          </Link>
        </div>
        <div className="about">
          <h3>About Visiri</h3>
          <p>
            Visiri is an application that allows users to upload cell microscopy
            images and create datasets that will allow deep learning models to
            automatically count cells.
          </p>
          <p>
            Using a mobile device camera linked to the eyepiece of a microscope,
            a neural network must be trained with user's laboratory-specific
            imaging equipment and cells in order for automated counting to work.
          </p>
          <p>
            In this current build, users can upload images of their cells and
            label the cells in a mobile-friendly browser-based interface. It
            supports touch events such as pinch zooming and dragging as well as
            desktop mouse/wheel events.
          </p>
        </div>
      </section>
    );
  }
}
