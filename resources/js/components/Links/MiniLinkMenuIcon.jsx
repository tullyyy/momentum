import React, { Component } from "react";
import LinkMiniMenu from "./LinkMiniMenu";

class MiniLinkMenuIcon extends Component {
    render() {
        const { handleClick, showMiniLinkMenu } = this.props;
        return (
            <div onClick={handleClick}>
                {showMiniLinkMenu && (
                    <LinkMiniMenu
                        deleteLink={this.props.deleteLink}
                        id={this.props.id}
                        handleLinkEdit={this.props.handleLinkEdit}
                    />
                )}
            </div>
        );
    }
}

export default MiniLinkMenuIcon;
