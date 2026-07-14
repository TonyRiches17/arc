
import "./Bills.css";
import Modal from "../Modal/Modal";
import BillsForm from "../Forms/BillsForm";

function Bills({ modalActive, setModalActive }) {


  return(
    <div className="bills">
      <button onClick={() => {setModalActive("whatever")}} type="button" className="bills__add">+</button>
      {modalActive && (<Modal><BillsForm /></Modal>)}

    </div>
  )
}

export default Bills;