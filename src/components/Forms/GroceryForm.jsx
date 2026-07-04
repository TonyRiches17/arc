import { useState } from "react";
import "./Forms.css";

function GroceryForm({ setModalActive }) {
const [groceryForm, setGroceryForm] = useState({
  grocerytype: "",
  grocerycycle: "",
  grocerydue: "",
  groceryamount: 0,
})

const handleChange = (evt) => {
    const { name, value } = evt.target;
    setGroceryForm((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setModalActive(false);
  };

  return(
    <div className="form">
      <form onSubmit={handleSubmit} className="form__form">
    <h2 className="form__title">Add a Grocery</h2>
        <select onChange={handleChange} value={groceryForm.grocerytype} required name="Grocerytype" id="grocerytype" className="form__select">
          <option value="" disabled hidden>Type of Grocery</option>
          <option>Credit Card</option>
          <option>Automobile</option>
          <option>Rent/Mortgage</option>
          <option>Utility</option>
          <option>Phone</option>
          <option>Other</option>
        </select>
        <select onChange={handleChange} value={groceryForm.grocerycycle} required name="grocerycycle" id="grocerycycle" className="form__select">
          <option value="" disabled hidden>Pay Cycle</option>
          <option>Daily</option>
          <option>Monthly</option>
          <option>Quarterly</option>
          <option>Bi-Annual</option>
          <option>Yearly</option>
        </select>
        <label htmlFor="grocerydue" className="form__label">Due Date:
          <input onChange={handleChange} value={groceryForm.grocerydue} id="grocerydue" name="grocerydue" type="date" className="form__input" />
        </label>
        <label htmlFor="groceryamount" className="form__label">Amount:
          <input onChange={handleChange} value={groceryForm.groceryamount} id="groceryamount" name="groceryamount" type="text" className="form__input" />
        </label>
        <button type="submit" className="form__submit">Submit</button>
        </form>
        </div>
  )
}

export default GroceryForm;