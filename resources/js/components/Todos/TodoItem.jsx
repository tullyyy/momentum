import React, { Component, createRef } from "react";
import MiniMenuIcon from "./MiniMenuIcon";

class TodoItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            menuDisplay: "none"
        };
        this.textInput = createRef();
    }

    setItemToFocus = () => {
        this.textInput.current.focus();
    };

    showMiniMenu = () => {
        return this.props.currentID === this.props.todo.id;
    };

    handleClick = () => {
        this.props.setCurrentID(this.props.todo.id);
    };

    handleMouseEnter = e => {
        e.stopPropagation();
        this.setState({
            menuDisplay: "inline-block"
        });
    };

    handleMouseOut = e => {
        e.stopPropagation();
        if (!this.showMiniMenu()) {
            this.setState({
                menuDisplay: "none"
            });
        }
    };

    handleKeyDown = e => {
        const id = e.target.id;
        const value = e.target.value;

        if (e.key === "Enter") {
            this.props.setItemToEdit(null);
            this.textInput.current.blur();

            fetch("/api/todos/" + id, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ title: value })
            });
        }
    };

    componentDidMount() {}

    render() {
        const { completed, id, title } = this.props.todo;
        const completedStyle = {
            opacity: ".625",
            textDecoration: "line-through"
        };
        const isReadOnly = id !== this.props.itemToEdit;
        return (
            <div
                className="todo-item-wrapper"
                onMouseOut={this.handleMouseOut}
                onMouseEnter={this.handleMouseEnter}
            >
                <li
                    className="todo-item"
                    onMouseOut={this.handleMouseOut}
                    onMouseEnter={this.handleMouseEnter}
                >
                    <div
                        className="todo-left"
                        onMouseOut={this.handleMouseOut}
                        onMouseEnter={this.handleMouseEnter}
                    >
                        <input
                            type="checkbox"
                            checked={completed}
                            onChange={() => this.props.handleChange(id)}
                            onMouseOut={this.handleMouseOut}
                            onMouseEnter={this.handleMouseEnter}
                        />

                        <input
                            ref={this.textInput}
                            className="todo-item-title"
                            readOnly={isReadOnly}
                            id={id}
                            type="text"
                            value={title}
                            style={completed ? completedStyle : null}
                            onMouseOut={this.handleMouseOut}
                            onMouseEnter={this.handleMouseEnter}
                            onChange={this.props.handleTextInputChange}
                            onKeyDown={this.handleKeyDown}
                        />
                    </div>
                    <span
                        className="mini-menu-button"
                        style={{ display: this.state.menuDisplay }}
                        onMouseOut={this.handleMouseOut}
                        onMouseEnter={this.handleMouseEnter}
                    >
                        <MiniMenuIcon
                            id={id}
                            setItemToFocus={this.setItemToFocus}
                            deleteTodo={this.props.deleteTodo}
                            setItemToEdit={this.props.setItemToEdit}
                            showMiniMenu={this.showMiniMenu()}
                            handleClick={this.handleClick}
                        />
                    </span>
                </li>
            </div>
        );
    }
}

export default TodoItem;

// functional version
// import React from "react"

// function TodoItem(props) {
//   return <li>{props.todo.title}</li>
// }

// export default TodoItem
