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
    
    static getDerivedStateFromProps(props, state) {
        return changeStyle(props.isShowingHouse);
    }

    render() {
        return (
            <div onClick={this.props.changeHouseFilters.bind(this, this.props.houseName)} className={this.state.class}>
                <img className="house-filter-img" src={this.state.housePictureURL}/>
            </div>
        );
    }
}
/*
    Cambia el color de fondo de los botones de los filtros de las casas para mostrar
    si se está mostrando esa casa o no
*/
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