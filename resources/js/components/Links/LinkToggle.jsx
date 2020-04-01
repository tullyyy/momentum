import React, { Component } from "react";
import LinkContainer from "./LinkContainer";
import { v4 as uuid } from "uuid";

class LinkToggle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showLinkMenu: false
      // linkToEdit: null,
      // links: []
    };
  }

  setLinkToEdit = id => {
    this.setState({
      linkToEdit: id
    });
  };

  deleteLink = id => {
    this.setState({
      links: [
        ...this.state.links.filter(link => {
          return link.id !== id;
        })
      ]
    });
  };

  addLink = title => {
    const newLink = {
      id: uuid(),
      title: title,
      completed: false
    };
    this.setState(prevState => {
      return {
        link: [...prevState.links, newLink]
      };
    });
  };

  handleClick = () => {
    this.setState(prevState => {
      return {
        showLinkMenu: !prevState.showLinkMenu
      };
    });
  };

  render() {
    return (
      <div className="link-toggle-wrapper">
        <div className="link-toggle-container">
          {this.state.showLinkMenu && <LinkContainer />}

          <span onClick={this.handleClick} className="link-toggle">
            Links
          </span>
        </div>
      </div>
    );
  }
}

export default LinkToggle;
