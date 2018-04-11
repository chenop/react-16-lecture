import React, {Component} from 'react';

class ErrorHandler extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    componentDidCatch(error, info) {
        this.setState({hasError: true})
    }

    render() {
        if (this.state.hasError) {
            return <h1>Error but everything is under control</h1>;
        }
        return this.props.children;
    }
}

ErrorHandler.propTypes = {};
ErrorHandler.defaultProps = {};

export default ErrorHandler;
