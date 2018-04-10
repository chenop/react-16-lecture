import React, {Component} from 'react';
import {Button} from "material-ui";

class BuggyCounter extends Component {
    state= {
        counter: 0
    };

    handleClick = () => {
        if (this.state.counter === 2)
            throw new Error('I have Crashed!');

        this.setState({counter: this.state.counter + 1});
    };

    render() {
        return (
            <div>
                <Button onClick={this.handleClick}>Counter: {this.state.counter}</Button>
            </div>
        );
    }
}

BuggyCounter.propTypes = {};
BuggyCounter.defaultProps = {};

export default BuggyCounter;
