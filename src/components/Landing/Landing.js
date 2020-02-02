import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Landing.css";

export default class Landing extends Component {
  render() {
    return (
      <>
        <section className="Landing">
          <img className="splash" src="/Completed 2.jpg" alt="Visiri"></img>
          <Link to="/register" className="menu">
            Register
          </Link>
          <Link to="/login" className="menu">
            Login
          </Link>
          <Link className="menu" to="/upload">
            Demo
          </Link>
          <div className="about">
            <p>
              Visiri is an application that allows users to upload cell
              microscopy images and create datasets that will allow deep
              learning models to automatically count cells.
            </p>
            <p>
              Using a mobile device camera linked to the eyepiece of a
              microscope, a neural network must be trained with user's
              laboratory-specific imaging equipment and cells in order for
              automated counting to work.
            </p>
            <p>
              In this current build, users can upload images of their cells and
              label the cells in a mobile-friendly browser-based interface. It
              supports touch events such as pinch zooming and dragging as well
              as desktop mouse/wheel events.
            </p>
          </div>
          <ul className="intro">
            <li>Take a picture of the cells you want to count</li>
            <li>
              Mark the image with square boxes containing an individual cell
            </li>
            <li>Click on your cell in the toolbox to review its position</li>
            <li>
              When you are done, click Finished to save and upload the data to
              your collection of experiments
            </li>
          </ul>
        </section>
      </>
    );
  }
}
