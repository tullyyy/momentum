import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import ProButton from "./ProButton";
import ProLink from "./ProLink";

class NewLink extends Component {
  state = {
    link: "",
    name: "",
    proLink: false
  };

  handleTextInputChange = e => {
    this.setState({
      link: e.target.value
    });
  };

  handleNameInputChange = e => {
    this.setState({
      name: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleSubmit({ name: this.state.name, link: this.state.link });
  };

  handleProBackClicked = e => {
    this.setState({ proLink: false });
  };

  handleProClicked = e => {
    e.preventDefault();
    this.setState({ proLink: true });
  };

  handleProLinkSubmit = () => {
    this.setState({
      proLink: false
    });
  };

  render() {
    return (
      <>
        <div className="new-link-container">
          {this.state.proLink ? (
            <ProLink
              handleClick={this.handleProBackClicked}
              handleSubmit={this.handleProLinkSubmit}
            />
          ) : (
            <>
              <form
                onSubmit={this.handleSubmit}
                className="link-input-container"
              >
                <button type="button" onClick={this.props.handleClick}>
                  <FontAwesomeIcon icon={faArrowLeft} className="icon" />
                </button>
                <p className="input-link-container">
                  <label htmlFor="Links">Name</label>
                  <br />
                  <input
                    type="text"
                    placeholder=""
                    className="input-link-name"
                    value={this.state.name}
                    onChange={this.handleNameInputChange}
                  />
                </p>
                <p>
                  <label htmlFor="Links">Links</label>
                  <br />
                  <input
                    type="text"
                    placeholder="example.com"
                    className="input-link"
                    value={this.state.link}
                    onChange={this.handleTextInputChange}
                  />
                </p>{" "}
                <ProButton handleClick={this.handleProClicked} />
                <br />
                <input
                  type="submit"
                  className="input-link-submit"
                  value="Create"
                />
              </form>
            </>
          )}
        </div>
      </>
    );
  }
}
export default NewLink;
