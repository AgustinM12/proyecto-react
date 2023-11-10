import { useFetchData } from "../hooks/useFetchGet";

export const Selects = ({ label, placeholder, position, itemName, url, name }) => {

  const data = useFetchData(url)

  console.log(data);

  return (
    <div className="col-md-6 px-1">
      <label className="form-label">{label}</label>
      <select name={name} className="form-select" aria-label="Default select example"
        required>
        <option value="" selected disabled>{placeholder}</option>
        {
          data.map((item, id) => (
            <option key={id} value={item[position]}>{item[itemName]}</option>
          ))
        }
      </select>
    </div>
  )
}
