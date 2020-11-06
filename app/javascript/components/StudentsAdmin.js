import React, { Component } from 'react';
import PropTypes from 'prop-types';
import StudentList from './Admin/Students/StudentList';

class StudentsAdmin extends Component {
    render() {
        return (
            <div className="row">
                <section id="all-students-panel" className="panel-component">
                <p className="label">ESTUDIANTES:</p>
                <div id="students-container" className="elements-container">
                    <StudentList
                        students={this.props.students}
                    />
                </div>
                </section>
            </div>
        );
    }
}

StudentsAdmin.propTypes = {
    students: PropTypes.array.isRequired
};

export default StudentsAdmin;