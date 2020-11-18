import React, { Component } from 'react';
import PropTypes from 'prop-types';

class HouseFilterButton extends Component {
    state = {
        housePictureURL: '',
        class: 'house-filter-button house-filter-button-green'
    }

    componentDidMount() {
        let houseName;
        let houseID = this.props.houseName
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

    // componentWillReceiveProps(nextProps) {
    // }
    
    static getDerivedStateFromProps(props, state) {
        return changeStyle(props.isShowingHouse);
    }

    render() {
        return (
            <div className={this.state.class}>
                <img onClick={this.props.changeHouseFilters.bind(this, this.props.houseName)} className="house-filter-img" src={this.state.housePictureURL}/>
            </div>
        );
    }
}

function changeStyle(isShowing) {
    if (!isShowing) {
        return {class: "house-filter-button house-filter-button-red"};
    } else {
        return {class: "house-filter-button house-filter-button-green"};
    }
}

HouseFilterButton.propTypes = {
    houseName: PropTypes.string.isRequired,
    changeHouseFilters: PropTypes.func.isRequired,
    isShowingHouse: PropTypes.bool.isRequired
};

export default HouseFilterButton;