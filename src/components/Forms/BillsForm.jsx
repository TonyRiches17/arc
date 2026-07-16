import { useState } from "react";
import "./Forms.css";

function BillsForm({ closeModal, addBill }) {
const [billsForm, setBillsForm] = useState({
  company: "",
  billtype: "",
  billcycle: "",
  billdue: "",
  billamount: "",
  billpaid: false,
  autopay: false,
})

const handleChange = (evt) => {
    const { name, type, value, checked } = evt.target;
    const newValue = type === "checkbox" ? checked : value;
    setBillsForm((prevData) => ({
      ...prevData,
      [name]: newValue
    }));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    addBill(billsForm);
    setBillsForm({
      company: "",
      billtype: "",
      billcycle: "",
      billdue: "",
      billamount: "",
      billpaid: false,
      autopay: false,
    })
    closeModal();
  };

  return(
    <div className="form">
      <form onSubmit={handleSubmit} className="form__form">
    <h2 className="form__title">Add a Bill</h2>
        <label htmlFor="company" className="form__label">Company Name:
          <input onChange={handleChange} value={billsForm.company} required id= "company" name="company" type="text" className="form__input" />
        </label>
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
          <input onChange={handleChange} value={billsForm.billdue} required id="billdue" name="billdue" type="date" className="form__input" />
        </label>
        <label htmlFor="billamount" className="form__label">Amount:
          <input onChange={handleChange} value={billsForm.billamount} required id="billamount" name="billamount" type="number" className="form__input" />
        </label>
        <div className="form__checkboxes-bills">
        <label htmlFor="billpaid" className="form__label">Been Paid:
          <input onChange={handleChange} value={billsForm.billpaid} id="billpaid" name="billpaid" type="checkbox" className="form__checkbox" />
        </label>
        <label htmlFor="autopay" className="form__label">Autopay:
          <input onChange={handleChange} value={billsForm.autopay} id="autopay" name="autopay" type="checkbox" className="form__checkbox" />
        </label>
        </div>
        <button type="submit" className="form__submit">Submit</button>
        </form>
        </div>
  )
}

export default BillsForm;