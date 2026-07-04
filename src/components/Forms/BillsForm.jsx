import { useState } from "react";
import "./Forms.css";

function BillsForm() {
const [billsForm, setBillsForm] = useState([{
  billtype: "",
  billcycle: "",
  billdue: "",
  billamount: 0,
}])

  return(
    <div className="form">
    <h2 className="form__title">{location.pathname}</h2>
        <select required name="billtype" id="billtype" className="form__select">
          <option value="" disabled hidden>Type of Bill</option>
          <option>Credit Card</option>
          <option>Automobile</option>
          <option>Rent/Mortgage</option>
          <option>Utility</option>
          <option>Phone</option>
          <option>Other</option>
        </select>
        <select required name="billcycle" id="billcycle" className="form__select">
          <option value="" disabled hidden>Pay Cycle</option>
          <option>Daily</option>
          <option>Monthly</option>
          <option>Quarterly</option>
          <option>Bi-Annual</option>
          <option>Yearly</option>
        </select>
        <label id="billdue" name="billdue" htmlFor="billdue" className="form__label">Due Date:
          <input type="date" className="form__input" />
        </label>
        <label id="billamount" name="billamount" htmlFor="billamount" className="form__label">Amount:
          <input type="text" className="form__input" />
        </label>
        <button type="submit" className="form__submit">Submit</button>
        </div>
  )
}

export default BillsForm;