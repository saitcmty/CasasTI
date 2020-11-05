import React, { Component } from 'react';
import PropTypes from 'prop-types';
import StudentEvidences from './StudentEvidences';
// import './StudentInfo.css';

class StudentInfo extends Component {
    render() {
        return (
            <section>
                <section id="student-display">
                    <div className="profile-img-component">
                        <img className="user-img" src={this.props.studentPictureURL}></img>
                        <img className="house-icon" src={this.props.studentHouseURL}></img>
                    </div>
                    <div id="student-info-container">
                        <p id="student-name">{this.props.studentName}</p>
                        <p id="student-id">{this.props.studentID}</p>
                    </div>
                </section>
                <div id="puntos-display">
                    <span>Puntos: </span>
                    <span id="student-puntos">{this.props.studentPoints}</span>
                </div>
                <div class="row">
                    <section id="my-registrations-panel" class="panel-component">

                        <p class="label">Registros de Evidencias:</p>
                        
                        <div id="my-registrations-container" class="elements-container">
                            <StudentEvidences studentEvidences={this.props.studentEvidences}/>
                        </div>
                    </section>
                </div>
                
            </section>
        );
    }
}

StudentInfo.propTypes = {
    studentName: PropTypes.string.isRequired,
    studentID: PropTypes.string.isRequired,
    studentPictureURL: PropTypes.string.isRequired,
    studentHouseURL: PropTypes.string.isRequired,
    studentPoints: PropTypes.string.isRequired,
    studentEvidences: PropTypes.array.isRequired
};

export default StudentInfo;