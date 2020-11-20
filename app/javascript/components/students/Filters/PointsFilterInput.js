import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PointsFilterInput extends Component {
    state = {
        header: '',
        inputText: ''
    }

    componentDidMount() {
        this.setState({header: ((this.props.pointsFilter == 'max') ? 'Puntos Máximos' : 'Puntos Minimos')})
    }

    changeInputText = (e) => {
        e.preventDefault();
        this.setState({inputText: e.target.value});
        this.props.changePointsFilters(this.props.pointsFilter, e.target.value);
    }

    render() {
        return (
            <div>
                <p className="points-filter-input-header">{this.state.header}</p>
                <input 
                    type="text" 
                    name="inputText" 
                    placeholder={this.props.pointsFilter}
                    value={this.state.inputText}
                    onChange={this.changeInputText}
                />
            </div>
        );
    }
}

PointsFilterInput.propTypes = {
    pointsFilter: PropTypes.string.isRequired,
    changePointsFilters: PropTypes.func.isRequired
};

export default PointsFilterInput;