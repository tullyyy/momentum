import React, { Component } from "react";

class ProButton extends Component {
  render() {
    return (
      <>
        <button onClick={this.props.handleClick} className="pro-button">
          + Add Another Tab
        </button>
      </>
    );
  }
}
export default ProButton;
