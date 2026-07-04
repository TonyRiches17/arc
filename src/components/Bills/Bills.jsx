import { useState } from "react";
import "./Bills.css";
import Modal from "../Modal/Modal";
import BillsForm from "../Forms/BillsForm";

function Bills({ modalActive, setModalActive }) {
const [bills, setBills] = useState([]);

  return(
    <div className="bills">
      <button onClick={() => {setModalActive("bills")}} type="button" className="bills__add">+</button>
      {modalActive === "bills" && (<Modal />)}

    </div>
  )
}

export default Bills;