import React, {Component} from 'react';
import {Context} from "./MyProvider";

class Person extends Component {
    render() {
        let {firstName} = this.props;
        return (
            <div>
                <Context.Consumer>
                    {(context) => (
                        <p>I'm {firstName} {context.lastName}</p>
                    )}
                </Context.Consumer>
            </div>
        );
    }
}

Person.propTypes = {};
Person.defaultProps = {};

export default Person;
