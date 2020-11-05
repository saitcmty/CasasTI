import React, { Component } from 'react';
import StudentInfo from './Student/StudentInfo';
import PropTypes from 'prop-types';

class Student extends Component {
    render() {
        return (
            <div>
                <StudentInfo 
                    studentName={this.props.studentName} 
                    studentID={this.props.studentID}
                    studentPictureURL={this.props.studentPictureURL}
                    studentHouse={this.props.studentHouse}
                    studentHouseURL={this.props.studentHouseURL}
                    studentPoints={this.props.studentPoints}
                    studentEvidences={this.props.studentEvidences}
                />
            </div>
        );
    }
}

Student.propTypes = {
    studentName: PropTypes.string.isRequired,
    studentID: PropTypes.string.isRequired,
    studentPictureURL: PropTypes.string.isRequired,
    studentHouse: PropTypes.string.isRequired,
    studentHouseURL: PropTypes.string.isRequired,
    studentPoints: PropTypes.number.isRequired,
    studentEvidences: PropTypes.array.isRequired
};

export default Student;