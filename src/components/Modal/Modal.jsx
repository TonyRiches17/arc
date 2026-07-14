
import BillsForm from "../Forms/BillsForm";
import GroceryForm from "../Forms/GroceryForm";
import QueuesForm from "../Forms/QueuesForm";
import "./Modal.css";

function Modal({ setModalActive, children, addQueue }) {

  const closeModal = (evt) => {
    evt.stopPropagation();
    setModalActive("");

  };

  return(
    <div className="modal">
      <div className="modal__container">
        <button onClick={() => {setModalActive("")}} type="button" className="modal__container-close">X</button>
        {children}
      
        {/* {modalActive === "bills" && <BillsForm />} */}
        {/* {modalActive === "groceries" && <GroceryForm />} */}
        {/* {modalActive === "queuesform" && <QueuesForm addQueue={addQueue} setModalActive={setModalActive} />} */}
      </div>
    </div>
  )
}

export default Modal;