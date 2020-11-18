import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Registration extends Component {
    render() {
        return (
            <div>
                <div className="registration-component element-component">
                    <div className="info">
                        <p className="title">{this.props.evidence.title}</p>
                        <p className="date">{this.props.registration.date}</p>
                    </div>
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