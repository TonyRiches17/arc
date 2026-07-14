import { useState } from "react";
import "./Forms.css";

function QueuesForm({ addQueue, setModalActive }) {
  const [titleValue, setTitleValue] = useState("");

  const handleInputChange = (evt) => {
    setTitleValue(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    // Prevent blank queue names
    if (!titleValue.trim()) return;

    addQueue(titleValue.trim());

    setTitleValue("");

    setModalActive("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="form__form-center"
    >
      <h2 className="form__title">Add a Queue</h2>

      <input
        type="text"
        className="form__input"
        placeholder="Title of Queue"
        value={titleValue}
        onChange={handleInputChange}
      />

      <button
        type="submit"
        className="form__submit"
      >
        Create Queue
      </button>
    </form>
  );
}

export default QueuesForm;