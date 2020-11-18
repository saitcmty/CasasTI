import React, { Component } from 'react';
import PropTypes from 'prop-types';
import StudentList from './Admin/Students/StudentList';
import HouseFilterButton from './Admin/Students/HouseFilterButton';

let houseFilters = {}

class StudentsAdmin extends Component {
    constructor(props) {
        super(props);
        this.createHouseFilters();
    }

    state = {
        studentList: [],
        filters: {
            houses: houseFilters
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

        this.setState({studentList: list});
    }

    changeHouseFilters = (house) => {
        let newHouses = this.state.filters.houses
        newHouses[house] = !newHouses[house];
        this.setState({filters: {houses: newHouses}});
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
                    <div className="student-filters" id="houses-filter">
                        <HouseFilterButton isShowingHouse={this.state.filters.houses['Cuervos']} changeHouseFilters={this.changeHouseFilters}      houseName="Cuervos"/>
                        <HouseFilterButton isShowingHouse={this.state.filters.houses['Gallinas de Guinea']} changeHouseFilters={this.changeHouseFilters}     houseName="Gallinas de Guinea"/>
                        <HouseFilterButton isShowingHouse={this.state.filters.houses['Patos']} changeHouseFilters={this.changeHouseFilters}        houseName="Patos"/>
                        <HouseFilterButton isShowingHouse={this.state.filters.houses['Pavo Reales']} changeHouseFilters={this.changeHouseFilters}  houseName="Pavo Reales"/>
                        <HouseFilterButton isShowingHouse={this.state.filters.houses['Venados']} changeHouseFilters={this.changeHouseFilters}      houseName="Venados"/>
                    </div>
                    <div className="student-filters">
                        
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