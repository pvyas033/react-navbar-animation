import React from "react";
import { Link } from "react-router-dom";

import "./page.styles.css";

class PageComponent extends React.Component {
  constructor(props) {
    super(props);

    this.title = props.title;
    this.description = props.description;

    this.state = {
      containerCSSClass: "container",
      toggle: true,
    };
  }

  addActive() {
    if (this.state.toggle)
      this.setState({
        containerCSSClass: "container active",
        toggle: !this.state.toggle,
      });
    else
      this.setState({
        containerCSSClass: "container",
        toggle: !this.state.toggle,
      });
  }

  render() {
    return (
      <div className={this.state.containerCSSClass}>
        <div className="navbar">
          <div className="menu">
            <div className="logo-container">
              <h1> LOGO IMAGE</h1>
            </div>
            <div onClick={this.addActive.bind(this)} className="hamburger-menu">
              <div className="bar"></div>
            </div>
          </div>
        </div>

        <div className="main-container">
          <div className="main">
            <header>
              <div className="overlay">
                <div className="inner">
                  <h2 className="title">{this.title}</h2>
                  <p className="description">{this.description}</p>
                </div>
              </div>
            </header>
          </div>
          <div className="shadow one"></div>
          <div className="shadow two"></div>
        </div>
        <div className="links">
          <ul>
            <li>
              <Link to="/" className="option">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="option">
                About
              </Link>
            </li>
            <li>
              <Link to="/projects" className="option">
                Project
              </Link>
            </li>
            <li>
              <Link to="/contact" className="option">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/resume" className="option">
                Resume
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default PageComponent;
