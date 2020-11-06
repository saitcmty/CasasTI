import React, { Component } from 'react';
import PropTypes from 'prop-types';
import StudentElement from './StudentElement';

class StudentList extends Component {
    render() {
        return this.props.students.map ((student) => (
            <StudentElement
                key={student.tec_id} 
                student={student}
            />
        ))
    }
}

StudentList.propTypes = {
    students: PropTypes.array.isRequired
};

export default StudentList;