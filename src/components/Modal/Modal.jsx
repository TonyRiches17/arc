
import BillsForm from "../Forms/BillsForm";
import GroceryForm from "../Forms/GroceryForm";
import "./Modal.css";

function Modal({ modalActive, setModalActive, children }) {

  return(
    <div className="modal">
      <div className="modal__container">
        {children}
        <button onClick={() => {setModalActive("")}} type="button" className="modal__container-close">X</button>
        {modalActive === "bills" && <BillsForm />}
        {modalActive === "groceries" && <GroceryForm />}
      </div>
    </div>
  )
}

export default Modal;