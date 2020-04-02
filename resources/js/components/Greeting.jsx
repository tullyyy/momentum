import React from "react";
import AutosizeInput from "react-input-autosize";

class Greeting extends React.Component {
    constructor() {
        super();
        this.state = {
            firstName: "",
            editMode: true
        };
        this.handleChange = this.handleChange.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    submitHandler(e) {
        e.preventDefault();
        this.setState(prevState => ({ editMode: !prevState.editMode }));
        if (this.state.editMode) {
            e.target.focus();
        }
    }

    render() {
        const hours = new Date().getHours();
        let timeOfDay;

        if (hours < 12) {
            timeOfDay = "morning";
        } else if (hours >= 12 && hours < 17) {
            timeOfDay = "afternoon";
        } else {
            timeOfDay = "evening";
        }

        const firstNameInput = () => {
            if (this.state.editMode) {
                return (
                    <form
                        className="greeting__form"
                        onSubmit={this.submitHandler}
                    >
                        <AutosizeInput
                            className="greeting__input"
                            type="text"
                            value={this.state.firstName}
                            name="firstName"
                            onChange={this.handleChange}
                            autoComplete="off"
                            // style={ { width: this.state.firstName.length }}
                        />
                    </form>
                );
            } else {
                return (
                    <span onClick={this.submitHandler}>
                        {this.state.firstName}
                    </span>
                );
            }
        };

        return (
            <div className="greeting">
                <span>Good {timeOfDay}, </span>
                <span>&nbsp;</span>
                {firstNameInput()}
                <span>.</span>
            </div>
        );
    }
}

export default Greeting;
