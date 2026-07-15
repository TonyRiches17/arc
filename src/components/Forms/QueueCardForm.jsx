import { useState } from "react";
import "./Forms.css";

function QueueCardForm({ selectedQueue, renameQueue, closeModal }) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (evt) => {
    setInputValue(evt.target.value);
  }

  const handleSubmit = (evt) => {
  evt.preventDefault();

  const success = renameQueue(selectedQueue.id, inputValue);

  if (success) {
    closeModal();
  }
};

  return(
    <form onSubmit={handleSubmit} className="form__form-center">
      <h3 className="form__title">Enter New Name</h3>
      <input onChange={handleInputChange} placeholder={selectedQueue.title} value={inputValue} type="text" className="form__input" />
      <button type="submit" className="form__submit">Modify</button>
    </form>
  )
}

export default QueueCardForm;