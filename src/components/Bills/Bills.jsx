import { useState } from "react";
import "./Bills.css";
import Modal from "../Modal/Modal";
import BillsForm from "../Forms/BillsForm";
import BillCard from "./BillCard";

function Bills({ modalActive, setModalActive, closeModal }) {
  const [bills, setBills] = useState([]);

const addBill = (bill) => {

  const trimmedName = bill.company.trim();

  const newBill = {
    id: crypto.randomUUID(),
    ...bill,
    company: trimmedName,
    billamount: Number(bill.billamount),
    createdAt: Date.now(),
    color: "#4CAF50",
  };

  setBills((prevBills) => [...prevBills, newBill]);
};


  return(
    <div className="bills">
      <button onClick={() => {setModalActive("bills")}} type="button" className="bills__add">+</button>
      {modalActive === "bills" && (<Modal closeModal={closeModal}><BillsForm addBill={addBill} closeModal={closeModal} /></Modal>)}
      <div className="bills__cards-container">
            {bills.map((bill) => (

        <BillCard
            key={bill.id}
            bill={bill}
        />

      ))}

      </div>
    </div>
  )
}

export default Bills;