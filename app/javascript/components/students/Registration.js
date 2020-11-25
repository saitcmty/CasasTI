import React, { Component } from 'react';
import moment from "moment";
import PropTypes from 'prop-types';

class Registration extends Component {
    state = {
        date: ''
    }  

    componentDidMount() {
        console.log(this.props);
        const dateString = moment(this.props.registration.date).locale("es").format("DD-MMM-YYYY hh:mma");

        this.setState({date: dateString});
    }

    render() {
        return (
            <div>
                <div className="registration-component element-component">
                    <div className="info">
                        <p className="title">{this.props.evidence.title}</p>
                        <p className="date">{this.state.date}</p>
                    </div>
                    <p className="student-points-panel">Puntos: {this.props.evidence.points}</p>
                    <div className="icon-container">
                        <Approved approved={this.props.registration.approved}/>
                    </div>
                </div>
            </div>
        );
    }
}

function Approved(props) {
    const approved = props.approved;
    if (approved) {
        return <i className="material-icons right-icon">done</i>;
    }
}

Registration.propTypes = {
    registration: PropTypes.object.isRequired,
    evidence: PropTypes.object.isRequired,
};

export default Registration;