import React, { Component } from 'react';
import Evidence from './Evidence';
import PropTypes from 'prop-types';

class StudentEvidences extends Component {
    render() {
        return this.props.studentEvidences.map((Evidence) => (
            <Evidence/>
        ));
    }
}

StudentEvidences.propTypes = {
    studentEvidences: PropTypes.array.isRequired
};

export default StudentEvidences;