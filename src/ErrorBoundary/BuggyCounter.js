import React, {Component} from 'react';
import {Button} from "material-ui";
import PropTypes from 'prop-types';

class BuggyCounter extends Component {

    state = {
        counter: 0
    };

    handleClick = () => {
        this.setState({counter: this.state.counter + 1});
    };

    render() {
        if (this.state.counter >= 2) {
            throw new Error('I have Crashed!');
        }

        return (
            <div>
                <Button onClick={this.handleClick}>{this.props.name}: {this.state.counter}</Button>
            </div>
        );
    }
}

BuggyCounter.propTypes = {
    name: PropTypes.string.isRequired
};
BuggyCounter.defaultProps = {};

export default BuggyCounter;
