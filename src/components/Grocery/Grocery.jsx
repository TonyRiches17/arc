import "./Grocery.css";
import GroceryForm from "../Forms/GroceryForm";
import Modal from "../Modal/Modal";

function Grocery({ modalActive, setModalActive, closeModal }) {


return(
    <div className="grocery">
      <button onClick={() => {setModalActive("groceries")}} type="button" className="grocery__add">+</button>
      {modalActive === "groceries" && (<Modal closeModal={closeModal}><GroceryForm /></Modal>)}
    </div>
  )
}

export default Grocery;