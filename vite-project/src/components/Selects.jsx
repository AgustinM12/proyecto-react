import { useEffect, useState } from "react";
import { useFetchData } from "../hooks/useFetchGet";



export const Selects = ({ label, placeholder, position, itemName, url }) => {

  const paises = useFetchData(url)

  return (
    <div className="col-md-6 px-1">
      <label className="form-label">{label}</label>
      <select id="pais" className="form-select" aria-label="Default select example"
        required>
        <option value="" selected disabled>{placeholder}</option>
        {
          paises.map((item, id) => (
            <option key={id} value={item[position]}>{item[itemName]}</option>
          ))
        }
      </select>
    </div>
  )
}
