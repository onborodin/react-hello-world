

import React, { Component } from "react";
import ReactDOM from "react-dom";

import Foundation, {Callout, Colors, Button} from "react-foundation";

class Clock extends Component {

    constructor(props) {
        super(props);
        this.state = {
            time: new Date().toLocaleTimeString()
        };
    }

    tick() {
        this.setState({
            time: new Date().toLocaleTimeString()
        });
    }

    componentWillMount() {
        this.intervalID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.intervalID);
    }


    render() {
        return (
            <div className="Clock">
                {this.state.time}
            </div>
        );
    }
}


class Toggle extends Component {

    constructor(props) {
        super(props);
        this.state = { isToggleOn: true };
        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        //this.setState(prevState => ({
        //      isToggleOn: !prevState.isToggleOn
        //}));

        this.setState(function(prevState) {
            return { isToggleOn : !prevState.isToggleOn };
        });

    }

    render() {
        return (
            <Button onClick={this.handleClick}>
                { this.state.isToggleOn ? 'ON' : 'OFF' }
            </Button>
        );
    }
}

const Places = [
  { name: "Palo Alto", zip: "94303" },
  { name: "San Jose", zip: "94088" },
  { name: "Santa Cruz", zip: "95062" },
  { name: "Honolulu", zip: "96803" }
];

class Place extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activePlace: 0,
        };
        this.places = Places;
    }

    render() {
        return (
            <div>
                {this.places.map((place, index) => (
                        <Button key={index} 
                            onClick={ 
                                () => {
                                    this.setState({ activePlace: index });
                                }
                            }
                        >
                            {place.name} 
                        </Button>
                ))}
                <div>{ this.places[this.state.activePlace].zip }</div>
            </div>
        )
    }
}

class App extends Component {

    render() {
        return (
            <div>
                <Callout className="success">
                        <h5>This is a success panel</h5>
                </Callout>

                <Button><Clock /></Button>

                <Toggle />

                <Place />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("app"));
