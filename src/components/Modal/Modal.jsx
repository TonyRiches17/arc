
import BillsForm from "../Forms/BillsForm";
import GroceryForm from "../Forms/GroceryForm";
import QueuesForm from "../Forms/QueuesForm";
import "./Modal.css";

function Modal({ children, closeModal }) {


  return(
    <div className="modal">
      <div className="modal__container">
        <button onClick={closeModal} type="button" className="modal__container-close">X</button>
        {children}
      </div>
    </div>
  )
}

export default Modal;