import React from "react";
import TodosList from "./TodosList";
import Header from "./Header";
import InputTodo from "./InputTodo";
import BeatLoad from "../Links/BeatLoad";
import ProTodo from "./ProTodo";

class TodoContainer extends React.Component {
  state = {
    proTodo: false
  };

  handleProBackClicked = e => {
    this.setState({ proTodo: false });
  };

  handleProClicked = e => {
    e.preventDefault();
    this.setState({ proTodo: true });
  };

  handleProTodoSubmit = () => {
    this.setState({
      proTodo: false
    });
  };

  render() {
    const {
      todos,
      handleChange,
      deleteTodo,
      addTodoItem,
      setItemToEdit,
      itemToEdit,
      handleTextInputChange
    } = this.props;
    return (
      <div className="todo-container">
        {this.state.proTodo ? (
          <ProTodo
            handleClick={this.handleProBackClicked}
            handleSubmit={this.handleProTodoSubmit}
          />
        ) : (
          <>
            <Header handleClick={this.handleProClicked} />
            {this.props.loading ? (
              <BeatLoad />
            ) : (
              <TodosList
                todos={todos}
                handleChange={handleChange}
                deleteTodo={deleteTodo}
                setItemToEdit={setItemToEdit}
                itemToEdit={itemToEdit}
                handleTextInputChange={handleTextInputChange}
              />
            )}
            <InputTodo addTodoItem={addTodoItem} />
          </>
        )}
      </div>
    );
  }
}
export default TodoContainer;
