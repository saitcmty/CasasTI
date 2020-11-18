import React, { Component } from 'react';
import PropTypes from 'prop-types';
import StudentList from './Admin/Students/StudentList';

class StudentsAdmin extends Component {
    state = {
        studentList: [],
        filters: {
            houses: {
                Cuervos: true,
                Gallinas: true,
                Patos: true,
                Pavorreales: true,
                Venados: true,
            }
        }
    }

    filterList() {
        let list = this.props.students;
        let keys = Object.keys(this.state.filters.houses);

        keys.forEach(house => {
            if (!this.state.filters.houses[house]) {
                list = list.filter(student => student.house_id != house);
            }
        })

        this.setState({studentList: list});
    }

    changeHouseFilters(house) {
        console.log(house);
        let newHouses = this.state.filters.houses
        newHouses[house] = !newHouses[house];
        this.setState({filters: {houses: newHouses}});
        this.filterList();
    }

    componentDidMount() {
        this.setState({studentList: this.props.students})
    }

    render() {
        console.log(this.props.students)
        return (
            <div>
                <div className="row admin-student-list-filters">
                    <div id="houses-filter">
                        <img onClick={this.changeHouseFilters.bind(this, 'Cuervos')} className="house-filter-img" src="/casas/cuervos.png"/>
                        <img onClick={this.changeHouseFilters.bind(this, 'Gallinas')} className="house-filter-img" src="/casas/gallinas.png"/>
                        <img onClick={this.changeHouseFilters.bind(this, 'Patos')} className="house-filter-img" src="/casas/patos.png"/>
                        <img onClick={this.changeHouseFilters.bind(this, 'Pavorreales')} className="house-filter-img" src="/casas/pavo_reales.png"/>
                        <img onClick={this.changeHouseFilters.bind(this, 'Venados')} className="house-filter-img" src="/casas/venados.png"/>
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