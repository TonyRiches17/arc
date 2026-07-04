import { useLocation } from "react-router-dom";
import "./Modal.css";

function Modal({ setModalActive }) {

  const location = useLocation();

  return(
    <div className="modal">
      <div className="modal__container">
        <button onClick={() => {setModalActive(false)}} type="button" className="modal__container-close">X</button>

      </div>
    </div>
  )
}

export default Modal;