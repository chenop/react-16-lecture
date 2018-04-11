import React, {Component, Fragment} from 'react';
import Person from "./Person";

class Family extends Component {
    render() {
        return (
            <Fragment>
                Parents:
                <Person firstName="Chen"  />
                <Person firstName="Hadas"  />

                Kids:
                <Person firstName="Ori"  />
                <Person firstName="Peleg"  />
            </Fragment>
        );
    }
}

Family.propTypes = {};
Family.defaultProps = {};

export default Family;
