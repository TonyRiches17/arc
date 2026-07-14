
import "./Bills.css";
import Modal from "../Modal/Modal";
import BillsForm from "../Forms/BillsForm";

function Bills({ modalActive, setModalActive, closeModal }) {


  return(
    <div className="bills">
      <button onClick={() => {setModalActive("bills")}} type="button" className="bills__add">+</button>
      {modalActive === "bills" && (<Modal closeModal={closeModal}><BillsForm /></Modal>)}

    </div>
  )
}

export default Bills;