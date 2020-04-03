import React, { Component, createRef } from "react";
import MiniLinkMenuIcon from "./MiniLinkMenuIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";

class LinkItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            menuLinkDisplay: "none",
            showMenu: false
        };
        this.menuRef = createRef();
    }

    showMiniLinkMenu = () => {
        return true;
        // return this.props.currentLinkID === this.props.link.id;
    };

    handleMouseEnter = e => {
        e.stopPropagation();
        this.setState({
            menuLinkDisplay: "inline-block"
        });
    };

    handleMouseOut = e => {
        e.stopPropagation();
        if (!this.showMiniLinkMenu()) {
            this.setState({
                menuLinkDisplay: "none"
            });
        }
    };

    handleClick = () => {
        this.setState({
            showMenu: !this.state.showMenu
        });
    };

    componentDidMount() {
        window.addEventListener("click", e => {
            if (
                !this.menuRef.current ||
                this.menuRef.current.contains(e.target)
            ) {
                return;
            }
            this.setState({
                showMenu: false
            });
        });
    }

    render() {
        return (
            <div
                className="link-item-wrapper"
                onMouseOut={this.handleMouseOut}
                onMouseEnter={this.handleMouseEnter}
            >
                <li
                    className="link-item"
                    onMouseOut={this.handleMouseOut}
                    onMouseEnter={this.handleMouseEnter}
                >
                    <div
                        className="link-left"
                        onMouseOut={this.handleMouseOut}
                        onMouseEnter={this.handleMouseEnter}
                    >
                        <a
                            href={"http://" + this.props.link.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            onMouseOut={this.handleMouseOut}
                            onMouseEnter={this.handleMouseEnter}
                        >
                            <FontAwesomeIcon
                                icon={faChevronCircleRight}
                                className="icon"
                                onMouseOut={this.handleMouseOut}
                                onMouseEnter={this.handleMouseEnter}
                            />
                            {this.props.link.name}
                        </a>
                    </div>
                    <span>
                        <span
                            className="mini-menu-button"
                            style={{ display: this.state.menuLinkDisplay }}
                            onMouseOut={this.handleMouseOut}
                            onMouseEnter={this.handleMouseEnter}
                            onClick={this.handleClick}
                            ref={this.menuRef}
                        >
                            <FontAwesomeIcon
                                icon={faEllipsisH}
                                className="icon"
                            />
                        </span>
                        {this.state.showMenu && (
                            <MiniLinkMenuIcon
                                showMiniLinkMenu={this.showMiniLinkMenu()}
                                deleteLink={this.props.deleteLink}
                                handleLinkEdit={this.props.handleLinkEdit}
                                id={this.props.link.id}
                            />
                        )}
                    </span>
                </li>
            </div>
        );
    }
}

export default LinkItem;
