import "./Modal.css";

function Modal({ setModalActive }) {
  return(
    <div className="modal">
      <div className="modal__container">
        <button onClick={() => {setModalActive(false)}} type="button" className="modal__container-close">X</button>
      </div>
    </div>
  )
}

export default Modal;