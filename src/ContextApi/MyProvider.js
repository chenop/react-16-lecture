import React, {Component} from 'react';

export const Context = React.createContext();

export default class MyProvider extends Component {
    state = {
        lastName: "Oppenhaim"
    };

    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        );
    }
}

