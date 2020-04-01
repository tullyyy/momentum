import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

class ProLink extends Component {
  render() {
    return (
      <div className="pro-link-container">
        <button className="icon-button" onClick={this.props.handleClick}>
          <FontAwesomeIcon icon={faTimes} className="icon" />
        </button>
        <div className="pro-link">
          <h3>Available on plus</h3>
          <h2>Tab Groups</h2>
          <h4>Open multiple websites with one click</h4>
          <button className="button-learn">
            <a
              href="https://momentumdash.com/plus?utm_source=extension&utm_medium=organic&utm_campaign=tab-groups"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn more
            </a>
          </button>
        </div>
      </div>
    );
  }
}
export default ProLink;
