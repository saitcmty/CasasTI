import React, { useState } from "react";
import StudentElement from "./summary";
import HouseFilterButton from './Filters/HouseFilterButton';
import PointsFilterInput from './Filters/PointsFilterInput';

let defHouseFilters = {}
const minPointsDefault = 0;
const maxPointsDefault = 999999;
let housesNames = [
    'Cuervos',            
    'Gallinas de Guinea',
    'Patos',
    'Pavo Reales',
    'Venados'
]

function createHouseFilters() {
    for (let i = 0; i < 5; i++) {
        defHouseFilters[housesNames[i]] = true;
    }
}

function filterList(students, houseFilters, pointsFilters, topOfList) {
    let list = students;
    let keys = Object.keys(houseFilters);

    keys.forEach(house => {
        if (!houseFilters[house]) {
            list = list.filter(student => student.house_id != house);
        }
    })

    list = list.filter(student => (student.uid <= pointsFilters.max && student.uid >= pointsFilters.min));

    if (topOfList > 0) {
        list = list.slice(0, topOfList);
    }

    return list;
}

export default function StudentsList(props) {

    const { label, students, showPoints } = props;

    createHouseFilters();

    const [houseFilters, setHouseFilters] = useState({
        ...defHouseFilters,
    });

    const changeHouseFilters = (house) => {
        let newHouses = houseFilters;
        newHouses[house] = !newHouses[house]
        setHouseFilters(newHouses);
        changeFilteredList();
    }

    const changePointsFilters = (filter, points) => {
        let obj = pointsFilters;
        obj[filter] = ((points) ? parseInt(points) : ((filter == 'max') ? maxPointsDefault : minPointsDefault));
        setPointsFilters(obj);
        changeFilteredList();
    }

    const [pointsFilters, setPointsFilters] = useState({
        min: minPointsDefault,
        max: maxPointsDefault
    });

    const [topOfList, setTopOfList] = useState('');

    const changeTopOfList = (e) => {
        e.preventDefault();
        setTopOfList(parseInt(e.target.value));
        changeFilteredList();
    }

    const [filteredList, setFilteredList] = useState(students);

    const changeFilteredList = () => {
        let list = filterList(students, houseFilters, pointsFilters, topOfList);
        setFilteredList(list);
    }

    return (
        <div>
            <div className="row admin-student-list-filters">
                    <div className="student-filters" >
                        <h1 id="filter-title">Filtros de casa</h1>
                        <div id="houses-filter">
                            {housesNames.map((house, i) => (
                                <HouseFilterButton
                                key={i}
                                houseName={house}
                                isShowingHouse={houseFilters[house]}
                                changeHouseFilters={changeHouseFilters}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="student-filters" id="points-filter">
                        <h1 id="filter-title">Filtros de puntos</h1>
                        <div id="points-filter-inputs">
                            <div className="points-filter-inputs-50 points-range-filter-inputs">
                                <PointsFilterInput pointsFilter="min" changePointsFilters={changePointsFilters}/>
                                <PointsFilterInput pointsFilter="max" changePointsFilters={changePointsFilters}/>
                            </div>
                            <div className="points-filter-inputs-50">
                                <div className="filter-div">
                                    <p className="points-filter-input-header">Top N</p>
                                    <input 
                                        className="filter-inputs"
                                        type="number" 
                                        name="topOfList" 
                                        placeholder="Top..."
                                        value={topOfList}
                                        onChange={changeTopOfList}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            <div className="row">
                <section id="all-students-panel" className="panel-component">
                    <p className="label">{label}</p>
                    <div id="students-container" className="elements-container">
                    {filteredList.map((student) => (
                        <StudentElement
                        key={student.tec_id}
                        student={student}
                        showPoints={showPoints}
                        />
                    ))}
                    </div>
                </section>
            </div>
        </div>
    );
}
