import React, { Component } from "react";
// import NewLink from "./NewLink";
class NewLinkButton extends Component {
  render() {
    return (
      <form className="link-input-button-container">
        <button className="input-link-button" onClick={this.props.handleClick}>
          + New Link
        </button>
      </form>
    );
  }
}
export default NewLinkButton;
