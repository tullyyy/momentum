import React, { Component } from "react";

class LinkMiniMenu extends Component {
  render() {
    return (
      <ul className="mini-link-menu">
        <li className="modify-link">
          <button>Modify</button>
        </li>
        <li className="delete-link">
          <button
            onClick={() => {
              console.log(this.props.id);
              this.props.deleteLink(this.props.id);
            }}
          >
            Delete
          </button>
        </li>
      </ul>
    );
  }
}

export default LinkMiniMenu;
