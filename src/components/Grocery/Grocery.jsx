import "./Grocery.css";
import GroceryForm from "../Forms/GroceryForm";
import Modal from "../Modal/Modal";

function Grocery({ modalActive, setModalActive }) {


return(
    <div className="grocery">
      <button onClick={() => {setModalActive("groceries")}} type="button" className="grocery__add">+</button>
      {modalActive === true && (<Modal><GroceryForm /></Modal>)}
    </div>
  )
}

export default Grocery;