import React, { Component } from "react";
import TodoMiniMenu from "./TodoMiniMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";

class MiniMenuIcon extends Component {
  render() {
    const {
      handleClick,
      showMiniMenu,
      id,
      deleteTodo,
      setItemToEdit,
      setItemToFocus
    } = this.props;
    return (
      <div onClick={handleClick}>
        <FontAwesomeIcon icon={faEllipsisH} className="icon" />
        {showMiniMenu && (
          <TodoMiniMenu
            id={id}
            setItemToFocus={setItemToFocus}
            deleteTodo={deleteTodo}
            setItemToEdit={setItemToEdit}
          />
        )}
      </div>
    );
  }
}

export default MiniMenuIcon;
