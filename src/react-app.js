
import React, { Component } from "react";
import ReactDOM from "react-dom";

//import Foundation from 'react-foundation';
import Foundation,{Callout,Colors} from "react-foundation";

class App extends Component {

    render() {
        return (
            <div>
                <div className="callout success">
                        <h5>Hello, World!</h5>
                </div>

                <Callout color={Colors.SECONDARY}>
                    <h5>This is a secondary panel</h5>
                    <p>It has an easy to override visual style, and is appropriately subdued.</p>
                    <a href="#">Its dangerous to go alone, take this.</a>
                </Callout>
            </div>

        );
    }
}

ReactDOM.render(<App />, document.getElementById("app"));
