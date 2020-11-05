import React, { Component } from 'react';
import PropTypes from 'prop-types';
import House from './House';

class HousesList extends Component {

    state = {
        houses: []
    }

    componentDidMount() {
        this.setState({houses: this.props.houses.sort((a, b) => {
            const houseA = a.points;
            const houseB = b.points;

            return (houseA > houseB) ? 1 : -1
        })});
    }

    render() {
        return this.state.houses.map((house, i) => (
            <House key={i} house={house} />
        ));
    }
}

HousesList.propTypes = {
    houses: PropTypes.array.isRequired
};

export default HousesList;