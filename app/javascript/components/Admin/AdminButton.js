import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AdminButton extends Component {

    render() {
        return (
            <div className="col-md-6" style={{padding: "8px"}}>
                <a href={`/${this.props.buttonID}`} id={`${this.props.buttonID}-button`} className="button-component">
                    <span>{this.props.buttonText}</span>
                    <i className="material-icons md-36 md-dark">arrow_forward_ios</i>
                </a>
            </div>
        );
    }
}

AdminButton.propTypes = {
    buttonID: PropTypes.string.isRequired,
    buttonText: PropTypes.string.isRequired
};

export default AdminButton;