import React, { Component } from 'react';
import Registration from './Registration';
import PropTypes from 'prop-types';

class StudentRegistrations extends Component {
    render() {
        return this.props.registrations.map((registration) => {
            return this.props.evidences.map ((evidence) => {
                if (evidence.id == registration.id) {
                    return (
                        <Registration key={registration.id} registration={registration} evidence={evidence}/>
                    )
                }
            })
        });
    }
}

StudentRegistrations.propTypes = {
    registrations: PropTypes.array.isRequired,
    evidences: PropTypes.array.isRequired,
};

export default StudentRegistrations;