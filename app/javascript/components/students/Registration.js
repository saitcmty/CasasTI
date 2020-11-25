import React, { Component } from 'react';
import moment from "moment";
import PropTypes from 'prop-types';

class Registration extends Component {
    state = {
        date: ''
    }  

    componentDidMount() {
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
                    {this.props.registration.approved && <p className="student-points-panel">Puntos: {this.props.evidence.points}</p>}
                    <Approved approved={this.props.registration.approved}/>
                </div>
            </div>
        );
    }
}

function Approved(props) {
    const {approved} = props;
    if (approved) {
        return (
            <span>
                <div className="icon-container">
                    <i className="material-icons right-icon">done</i>
                </div>
            </span>
        );
    } else {
        return <i></i>
    }
}

Registration.propTypes = {
    registration: PropTypes.object.isRequired,
    evidence: PropTypes.object.isRequired,
};

export default Registration;