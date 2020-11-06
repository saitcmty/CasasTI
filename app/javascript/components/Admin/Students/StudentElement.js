import React, { Component } from 'react';
import PropTypes from 'prop-types';

class StudentElement extends Component {

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
            <div className="event-component element-component container p-0">
                <div className="profile-img-component">
                    <img className="user-img" src={this.props.student.profile_img_url}/>
                    
                    <img className="house-icon" src={this.state.housePictureURL}/>
                </div>

                <div className="student-info">
                    <p className="student-name">{`${this.props.student.f_name} ${this.props.student.l_name}`}</p>
                    <p className="student-tec-id">{this.props.student.tec_id}</p>
                </div>

                <p className="student-points">Puntos: {this.props.student.uid}</p>
            </div>
        );
    }
}

StudentElement.propTypes = {
    student: PropTypes.object.isRequired
};

export default StudentElement;