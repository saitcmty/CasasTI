import React, { Component } from 'react';
import PropTypes from 'prop-types';
import StudentList from './Admin/Students/StudentList';
import HouseFilterButton from './Filters/HouseFilterButton';
import PointsFilterInput from './Filters/PointsFilterInput';

let houseFilters = {}
const minPointsDefault = 0;
const maxPointsDefault = 999999;

class StudentsAdmin extends Component {
    constructor(props) {
        super(props);
        this.createHouseFilters();
    }

    state = {
        studentList: [],
        filters: {
            houses: houseFilters,
            points: {
                min: minPointsDefault,
                max: maxPointsDefault
            }
        }
    }

    createHouseFilters = () => {
        let housesNames = [
            'Cuervos',            
            'Gallinas de Guinea',
            'Patos',
            'Pavo Reales',
            'Venados'
        ]

        for (let i = 0; i < 5; i++) {
            houseFilters[housesNames[i]] = true;
        }
    }

    filterList = () => {
        let list = this.props.students;
        let keys = Object.keys(this.state.filters.houses);

        keys.forEach(house => {
            if (!this.state.filters.houses[house]) {
                list = list.filter(student => student.house_id != house);
            }
        })

        list = list.filter(student => (student.uid <= this.state.filters.points.max && student.uid >= this.state.filters.points.min));

        this.setState({studentList: list});
    }

    changeHouseFilters = (house) => {
        let newHouses = this.state.filters
        newHouses.houses[house] = !newHouses.houses[house];
        this.setState({filters: newHouses});
        this.filterList();
    }

    changePointsFilters = (filter, points) => {
        let obj = this.state.filters;
        obj.points[filter] = ((points) ? parseInt(points) : ((filter == 'max') ? maxPointsDefault : minPointsDefault));
        this.setState({filters: obj});
        this.filterList();
	}

    componentDidMount() {
        this.createHouseFilters();
        this.setState({studentList: this.props.students})
    }

    render() {
        return (
            <div>
                <div className="row admin-student-list-filters">
                    <div className="student-filters" >
                        <h1 id="filter-title">Filtros de casa</h1>
                        <div id="houses-filter">
                            <HouseFilterButton isShowingHouse={this.state.filters.houses['Cuervos']}            changeHouseFilters={this.changeHouseFilters}    houseName="Cuervos"/>
                            <HouseFilterButton isShowingHouse={this.state.filters.houses['Gallinas de Guinea']} changeHouseFilters={this.changeHouseFilters}    houseName="Gallinas de Guinea"/>
                            <HouseFilterButton isShowingHouse={this.state.filters.houses['Patos']}              changeHouseFilters={this.changeHouseFilters}    houseName="Patos"/>
                            <HouseFilterButton isShowingHouse={this.state.filters.houses['Pavo Reales']}        changeHouseFilters={this.changeHouseFilters}    houseName="Pavo Reales"/>
                            <HouseFilterButton isShowingHouse={this.state.filters.houses['Venados']}            changeHouseFilters={this.changeHouseFilters}    houseName="Venados"/>
                        </div>
                    </div>
                    <div className="student-filters" id="points-filter">
                        <h1 id="filter-title">Filtros de puntos</h1>
                        <div id="points-filter-inputs">
                            <PointsFilterInput pointsFilter="min" changePointsFilters={this.changePointsFilters}/>
                            <PointsFilterInput pointsFilter="max" changePointsFilters={this.changePointsFilters}/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <section id="all-students-panel" className="panel-component">
                    <p className="label">ESTUDIANTES:</p>
                    <div id="students-container" className="elements-container">
                        <StudentList
                            students={this.state.studentList}
                        />
                    </div>
                    </section>
                </div>
            </div>
        );
    }
}

StudentsAdmin.propTypes = {
    students: PropTypes.array.isRequired
};

export default StudentsAdmin;