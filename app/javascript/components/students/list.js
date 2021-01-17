import React, { useState, useEffect } from "react";
import StudentElement from "./summary";
import HouseFilterButton from './Filters/HouseFilterButton';
import PointsFilterInput from './Filters/PointsFilterInput';

// Puntos máximos y minimos por default
const minPointsDefault = 0;
const maxPointsDefault = 99999;

// Nombres de las casas
let housesNames = [
    'Cuervos',            
    'Gallinas de Guinea',
    'Patos',
    'Pavo Reales',
    'Venados'
]

// Opciones para el filtro de top #
let topFilters = [
    {
        text: 'Mostrar Todos',
        value: 0
    },
    {
        text: 'Top 5',
        value: 5
    },
    {
        text: 'Top 10',
        value: 10
    },
    {
        text: 'Top 15',
        value: 15
    },
    {
        text: 'Top 20',
        value: 20
    },
]

/*
    Filtra la lista de estudiante según los filtros que se le de
*/
function filterList(students, selectedHouse, pointsFilters, topOfList) {
    let list = students;

    if (selectedHouse) {list = list.filter(student => student.house_id == selectedHouse);}

    list = list.filter(student => (student.uid <= pointsFilters.max && student.uid >= pointsFilters.min));

    if (topOfList > 0) {list = list.slice(0, topOfList);}

    return list;
}

export default function StudentsList(props) {

    const { label, students, showPoints } = props;

    // Marca que casa está seleccionada para filtrarse
    const [selectedHouse, setSelectedHouse] = useState('');

    // Cambia la casa seleccionada
    const changeSelectedHouse = (house) => {
        setSelectedHouse(((selectedHouse == house) ? '' : house));
    }

    // Cambia los filtros para los rangos de puntos
    const changePointsFilters = (filter, points) => {
        let obj = pointsFilters;
        obj[filter] = ((points) ? parseInt(points) : ((filter == 'max') ? maxPointsDefault : minPointsDefault));
        setPointsFilters(obj);
    }

    // Marca los limites del rango de puntos
    const [pointsFilters, setPointsFilters] = useState({
        min: minPointsDefault,
        max: maxPointsDefault
    });

    // Marca que top # se selecciona
    const [topOfList, setTopOfList] = useState('');

    // Cambie el top #
    const changeTopOfList = (e) => {
        e.preventDefault();
        setTopOfList(parseInt(e.target.value));
    }

    // Guarda la lista de estudiantes filtrada
    const [filteredList, setFilteredList] = useState(students);

    // Filtra la lista
    const changeFilteredList = () => {
        let list = filterList(students, selectedHouse, pointsFilters, topOfList);
        setFilteredList(list);
    }

    // Filtra la lista cuando alguno de los filtros cambia
    useEffect(() => {
        changeFilteredList();
    }, [topOfList, selectedHouse, pointsFilters]);
    
    topFilters[0].text = `Mostrar Todos (${((selectedHouse) ? students.filter(student => student.house_id == selectedHouse).length : students.length)})`

    return (
        <div>
            <div className="row admin-student-list-filters">
                    <div className="student-filters" >
                        <h1 id="filter-title">Filtros de casa</h1>
                        <HouseFilterList 
                            housesNames={housesNames}
                            selectedHouse={selectedHouse}
                            changeSelectedHouse={changeSelectedHouse}
                        />
                    </div>
                    <div className="student-filters" id="points-filter">
                        <h1 id="filter-title">Filtros de puntos</h1>
                        <div id="points-filter-inputs">
                            {/* <div className="points-filter-inputs-50 points-range-filter-inputs">
                                <PointsFilterInput pointsFilter="min" changePointsFilters={changePointsFilters}/>
                                <PointsFilterInput pointsFilter="max" changePointsFilters={changePointsFilters}/>
                            </div> */}
                            {/* <div className="points-filter-inputs-50"> */}
                                <TopFilters 
                                    changeTopOfList={changeTopOfList}
                                />
                            {/* </div> */}
                        </div>
                    </div>
                </div>
            <div className="row">
                <section id="all-students-panel" className="panel-component">
                    <p className="label">{label}</p>
                    <StudList 
                        filteredList={filteredList}
                        showPoints={showPoints}
                    />
                </section>
            </div>
        </div>
    );
}

function HouseFilterList (props) {
    const {housesNames, selectedHouse, changeSelectedHouse} = props;
    return (
        <div id="houses-filter">
            {housesNames.map((house, i) => (
                <HouseFilterButton
                key={i}
                houseName={house}
                selectedHouse={selectedHouse}
                changeSelectedHouse={changeSelectedHouse}
                />
            ))}
        </div>
    )
}

function StudList (props) {
    const {filteredList, showPoints} = props;

    return (
        <div id="students-container" className="elements-container">
            {filteredList.map((student) => (
                <StudentElement
                    key={student.tec_id}
                    student={student}
                    showPoints={showPoints}
                />
            ))}
        </div>
    )
}

function TopFilters(props) {
    const {changeTopOfList} = props;
    return (
        <div className="filter-div">
            <p className="points-filter-input-header">Top de Alumnos</p>
            <select 
                name="tops"
                className="filter-inputs"
                onChange={changeTopOfList}>
                {topFilters.map((top, i) => (
                    <option key={i} value={top.value}>{top.text}</option>
                ))}
            </select>
        </div>
    )
}