import React from "react";

export default function TopFilters(props) {
  const { changeTopOfList, topFilters } = props;
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
