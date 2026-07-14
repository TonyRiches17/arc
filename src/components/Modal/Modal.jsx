import { useEffect } from "react";
import BillsForm from "../Forms/BillsForm";
import GroceryForm from "../Forms/GroceryForm";
import QueuesForm from "../Forms/QueuesForm";
import "./Modal.css";

function Modal({ children, closeModal }) {

  useEffect(() => {
  const handleKeyDown = (evt) => {
    if (evt.key === "Escape") {
      closeModal();
    }
  };

  window.addEventListener("keydown", handleKeyDown);

  return () => {
    window.removeEventListener("keydown", handleKeyDown);
  };
}, [closeModal]);

  const closeModalClick = (evt) => {
    if(evt.target === evt.currentTarget) {
      closeModal();
    }
  };

  return(
    <div onClick={closeModalClick} className="modal">
      <div className="modal__container">
        <button onClick={closeModal} type="button" className="modal__container-close">X</button>
        {children}
      </div>
    </div>
  )
}

export default Modal;