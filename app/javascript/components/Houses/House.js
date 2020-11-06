import React, { Component } from 'react';
import PropTypes from 'prop-types';

class House extends Component {
    state = {
        housePictureURL: ''
    }

    componentDidMount() {
        let houseName;
        let houseID = this.props.house.name;
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

        this.setState({housePictureURL: `/casas/${houseName}_XXL.png`});
    }

    render() {
        return (
            <div className="house-component col-6 col-sm">
                
                <img className="house-icon" src={this.state.housePictureURL} />
                
                <div className="points-container">
                    <span>Puntos: </span>
                    <span id="house-points">{this.props.house.house_points}</span>
                </div>
            </div>
        );
    }
}

House.propTypes = {
    house: PropTypes.object.isRequired
};

export default House;