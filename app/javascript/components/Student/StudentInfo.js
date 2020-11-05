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
                        <a href={'/houses/' + this.props.studentHouse}>
                            <img className="user-img" src={this.props.studentPictureURL}></img>
                            <img className="house-icon" src={this.props.studentHouseURL}></img>
                        </a>
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
                <div className="row">
                    <section id="my-registrations-panel" className="panel-component">

                        <p className="label">Registros de Evidencias:</p>
                        
                        <div id="my-registrations-container" className="elements-container">
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
    studentHouse: PropTypes.string.isRequired,
    studentHouseURL: PropTypes.string.isRequired,
    studentPoints: PropTypes.number.isRequired,
    studentEvidences: PropTypes.array.isRequired
};

export default StudentInfo;