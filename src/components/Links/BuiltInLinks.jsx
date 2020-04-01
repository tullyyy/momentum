import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChrome } from "@fortawesome/free-brands-svg-icons";
import { faTh } from "@fortawesome/free-solid-svg-icons";

class BuiltInLinks extends Component {
  render() {
    return (
      <div className="links-wrapper">
        <li>
          <a href="http://google.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faChrome} className="icon" />
            Chrome Tab
          </a>
        </li>
        <li>
          <a href="chrome://apps/">
            <FontAwesomeIcon icon={faTh} className="icon" />
            Apps
          </a>
        </li>
      </div>
    );
  }
}
export default BuiltInLinks;
