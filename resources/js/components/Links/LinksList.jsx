import React, { Component } from "react";
import LinkItem from "./LinkItem";

class LinksList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentLinkID: null
    };
  }

  render() {
    return (
      <div className="links-list">
        {this.props.links.map((link, i) => (
          <LinkItem key={i} link={link} deleteLink={this.props.deleteLink} />
        ))}
      </div>
    );
  }
}
export default LinksList;
