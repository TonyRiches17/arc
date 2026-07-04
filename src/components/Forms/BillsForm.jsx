import { useState } from "react";
import "./Forms.css";

function BillsForm({ setModalActive }) {
const [billsForm, setBillsForm] = useState({
  billtype: "",
  billcycle: "",
  billdue: "",
  billamount: 0,
})

const handleChange = (evt) => {
    const { name, value } = evt.target;
    setBillsForm((prevData) => ({
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
    <h2 className="form__title">Add a Bill</h2>
        <select onChange={handleChange} value={billsForm.billtype} required name="billtype" id="billtype" className="form__select">
          <option value="" disabled hidden>Type of Bill</option>
          <option>Credit Card</option>
          <option>Automobile</option>
          <option>Rent/Mortgage</option>
          <option>Utility</option>
          <option>Phone</option>
          <option>Other</option>
        </select>
        <select onChange={handleChange} value={billsForm.billcycle} required name="billcycle" id="billcycle" className="form__select">
          <option value="" disabled hidden>Pay Cycle</option>
          <option>Daily</option>
          <option>Monthly</option>
          <option>Quarterly</option>
          <option>Bi-Annual</option>
          <option>Yearly</option>
        </select>
        <label htmlFor="billdue" className="form__label">Due Date:
          <input onChange={handleChange} value={billsForm.billdue} id="billdue" name="billdue" type="date" className="form__input" />
        </label>
        <label htmlFor="billamount" className="form__label">Amount:
          <input onChange={handleChange} value={billsForm.billamount} id="billamount" name="billamount" type="text" className="form__input" />
        </label>
        <button type="submit" className="form__submit">Submit</button>
        </form>
        </div>
  )
}

export default BillsForm;