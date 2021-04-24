import React, { useState, useEffect } from 'react';

/*
    Cambia el color de fondo de los botones de los filtros de las casas para mostrar
    si se está mostrando esa casa o no
*/
function changeStyle(isShowing) {
  return `house-filter-button house-filter-button-${(isShowing) ? 'green' : 'red'}`
}

function HouseFilterButton(props) {
  const { houseName, changeSelectedHouse, selectedHouse } = props;

  const [cssClass, setCssClass] = useState('house-filter-button house-filter-button-red');

  const [housePictureURL, setHousePictureURL] = useState('');

  useEffect(() => {
    let houseURLName;
    let houseID = houseName;
    if (houseID == 'Cuervos') {
      houseURLName = 'cuervos';
    } else if(houseID == 'Gallinas de Guinea') {
      houseURLName = 'gallinas';
    } else if(houseID == 'Patos') {
      houseURLName = 'patos';
    } else if(houseID == 'Pavo Reales') {
      houseURLName = 'pavo_reales';
    } else if(houseID == 'Venados'){
      houseURLName = 'venados';
    }

    setHousePictureURL(`/casas/${houseURLName}.png`);
  }, [])

  useEffect(() => {
    setCssClass(changeStyle(selectedHouse == houseName));
  }, [selectedHouse])

  return (
    <div 
      onClick={() => changeSelectedHouse(houseName)} 
      className={cssClass}
    >
      <img className="house-filter-img" alt={houseName} src={housePictureURL}/>
    </div>
  );
}

export default function HouseFilterList (props) {
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
