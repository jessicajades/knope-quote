import React from "react";
import mainpic from "./mainpic.jpg";
import css from "./styles.css";
import axios from "axios";
import { async } from "q";

class App extends React.Component {
    state = { quote: [] };

    onButtonClick = async () => {
        const response = await axios.get(
            "https://leslie-knope-quotes.herokuapp.com/quotes"
        );

        this.setState({ quote: response.data });
    };

    render() {
        return (
            <div id="container">
                <img src={mainpic} />
                <h1>Leslie Knope Quote Generator</h1>
                <button onClick={this.onButtonClick}>Press for quote</button>
                <p id="quote-text">{this.state.quote}</p>
            </div>
        );
    }
}

export default App;
