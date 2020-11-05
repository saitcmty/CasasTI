import React, { Component } from 'react';
import PropTypes from 'prop-types';
import House from './Houses/House';
import HousesList from './Houses/HousesList';

class Houses extends Component {
    render() {
        return (
            
            <div className="container">
                <div className="row">
                    <HousesList houses={this.props.houses}/>
                </div>
            </div>
			
        );
    }
}

Houses.propTypes = {
    houses: PropTypes.array.isRequired
};

export default Houses;