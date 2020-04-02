import React, { Component } from "react";
import TodoToggle from "./components/Todos/TodoToggle";
import LinkToggle from "./components/Links/LinkToggle";
import AboutToggle from "./components/About/AboutToggle";
import getBackgroundImageURL from "./getBackgroundImageURL";

import "./style/style.css";
import "./style/clock.css";
import "./style/greeting.css";
import "./style/main-focus.css";
import "./style/randomQuote.css";

import Clock from "./components/Clock";
import Greeting from "./components/Greeting";
import MainFocus from "./components/MainFocus";
import RandomQuote from "./components/RandomQuote";

class App extends Component {
    constructor(props) {
        super(props);

        this.backgroundImage = getBackgroundImageURL();
    }

    render() {
        return (
            <div
                style={{ backgroundImage: `url("${this.backgroundImage}")` }}
                className="main"
            >
                <div className="bg"></div>
                <LinkToggle />
                <AboutToggle />
                <TodoToggle />
                {/* <div className="App"> */}
                <Clock />
                <Greeting />
                <MainFocus />
                <RandomQuote />
                {/* </div> */}
            </div>
        );
    }
}

export default App;
