import React, { useState, useEffect } from "react";
import StudentElement from "./summary";
import HouseFilterList from './Filters/HouseFilterList';
import TopFilters from './Filters/TopFilters';

// Nombres de las casas
let housesNames = [
  'Cuervos',            
  'Gallinas de Guinea',
  'Patos',
  'Pavo Reales',
  'Venados'
]

export default function StudentsList(props) {

  const { label, students, showPoints } = props;

  // Marca que casa está seleccionada para filtrarse
  const [selectedHouse, setSelectedHouse] = useState('');

  // Cambia la casa seleccionada
  const changeSelectedHouse = (house) => {
    setSelectedHouse(((selectedHouse == house) ? '' : house));
  }

  // Marca que top # se selecciona
  const [topFilters, setTopFilters] = useState([
    { text: 'Mostrar Todos', value: 0 },
    { text: 'Top 5', value: 5 },
    { text: 'Top 10', value: 10 },
    { text: 'Top 15', value: 15 },
    { text: 'Top 20', value: 20 },
  ]);

  // Marca que top # se selecciona
  const [topOfList, setTopOfList] = useState(0);

  // Cambie el top #
  const changeTopOfList = (e) => {
    e.preventDefault();
    setTopOfList(parseInt(e.target.value));
  }

  // Guarda la lista de estudiantes filtrada
  const [filteredList, setFilteredList] = useState(students);

  // Filtra la lista
  const changeFilteredList = () => {
    let list = filterList(students, selectedHouse, topOfList);
    setFilteredList(list);
    changeTopFiltersText(list.length);
  }

  const changeTopFiltersText = (size) => {
    let top = JSON.parse(JSON.stringify(topFilters));
    top[0].text = `Mostrar Todos (${size})`
    setTopFilters(top)
  }

  /*
      Filtra la lista de estudiante según los filtros que se le de
  */
  const filterList = (students, selectedHouse, topOfList) => {
    let list = JSON.parse(JSON.stringify(students));

    if (selectedHouse) { list = list.filter(student => student.house_id == selectedHouse); }

    if (topOfList) { list = list.slice(0, topOfList); }

    return list;
  }

  useEffect(() => {
      changeTopFiltersText(students.length);
  }, []);

  // Filtra la lista cuando alguno de los filtros cambia
  useEffect(() => {
      changeFilteredList();
  }, [topOfList, selectedHouse]);
  
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
            <TopFilters 
              changeTopOfList={changeTopOfList}
              topFilters={topFilters}
            />
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

