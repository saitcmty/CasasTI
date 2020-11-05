import React, { Component } from 'react';
import StudentInfo from './Student/StudentInfo';
import PropTypes from 'prop-types';

class Student extends Component {
    render() {
        return (
            <div>
                <StudentInfo 
                    student={this.props.student}
                    points={this.props.points}
                    registrations={this.props.registrations}
                    evidences={this.props.evidences}
                />
            </div>
        );
    }
}

Student.propTypes = {
    student: PropTypes.object.isRequired,
    points: PropTypes.number.isRequired,
    registrations: PropTypes.array.isRequired,
    evidences: PropTypes.array.isRequired,
};

export default Student;