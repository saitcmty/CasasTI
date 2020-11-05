import React, { Component } from 'react';
import PropTypes from 'prop-types';
import StudentRegistrations from './StudentRegistrations';
// import './StudentInfo.css';

class StudentInfo extends Component {
    state = {
        housePictureURL: ''
    }

    componentDidMount() {
        let houseName;
        let houseID = this.props.student.house_id
        if (houseID == 'Cuervos') {
            houseName = 'cuervos';
        } else if(houseID == 'Gallinas de Guinea') {
            houseName = 'gallinas';
        } else if(houseID == 'Patos') {
            houseName = 'patos';
        } else if(houseID == 'Pavo Reales') {
            houseName = 'pavo_reales';
        } else if(houseID == 'Venados'){
            houseName = 'venados';
        }

        this.setState({housePictureURL: `/casas/${houseName}.png`});
    }

    render() {
        return (
            <section>
                <section id="student-display">
                    <div className="profile-img-component">
                        <a href={'/houses/' + this.props.student.house_id}>
                            <img className="user-img" src={this.props.student.profile_img_url}></img>
                            <img className="house-icon" src={this.state.housePictureURL}></img>
                        </a>
                    </div>
                    <div id="student-info-container">
                        <p id="student-name">{`${this.props.student.f_name} ${this.props.student.l_name}`}</p>
                        <p id="student-id">{this.props.student.tec_id}</p>
                    </div>
                </section>
                <div id="puntos-display">
                    <span>Puntos: </span>
                    <span id="student-puntos">{this.props.points}</span>
                </div>
                <div className="row">
                    <section id="my-registrations-panel" className="panel-component">

                        <p className="label">Registros de Evidencias:</p>
                        
                        <div id="my-registrations-container" className="elements-container">
                            <StudentRegistrations registrations={this.props.registrations} evidences={this.props.evidences}/>
                        </div>
                    </section>
                </div>
                
            </section>
        );
    }
}

StudentInfo.propTypes = {
    student: PropTypes.object.isRequired,
    points: PropTypes.number.isRequired,
    registrations: PropTypes.array.isRequired,
    evidences: PropTypes.array.isRequired
};

export default StudentInfo;