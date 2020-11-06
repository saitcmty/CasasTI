import React, { Component } from 'react';
import PropTypes from 'prop-types';
import House from './Houses/House';

class SingleHouse extends Component {
    componentDidMount() {
        this.props.house.house_points += this.props.housePoints;
    }

    render() {
        console.log(this.props.house)
        return (
            <div className="container">
                <div className="row flex-column mt-5">
                    <div id="house-img">
                        <House house={this.props.house}/>
                    </div>
                </div>
            </div>
        );
    }
}

SingleHouse.propTypes = {
    house: PropTypes.object.isRequired,
    housePoints: PropTypes.number.isRequired
};


export default SingleHouse;