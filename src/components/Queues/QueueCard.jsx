import { useState } from "react";
import "./Queues.css"
import Modal from "../Modal/Modal";

function QueueCard({ queue, onClick, deleteQueue, openRenameModal }) {
  const [optionsClicked, setOptionsClicked] = useState(false);

  const showOptions = (evt) => {
    evt.stopPropagation();
    setOptionsClicked(!optionsClicked);
  };

  const handleDeleteQueue = (evt) => {
    evt.stopPropagation();
    deleteQueue(queue.id);
  };

  return (
    <div className="queuecard">
    <article
      className="queuecard__container"
      onClick={onClick}
    >

      <h3 className="queuecard__title">{queue.title}</h3>

      <button onClick={showOptions} type="button" className="queuecard__options">
        •••
      </button>

      {optionsClicked && (<div className="queuecard__options-container">
          <button onClick={handleDeleteQueue} type="button" className="queuecard__options-button1">Delete</button>
          <button onClick={(evt) => openRenameModal(queue, evt)} type="button" className="queuecard__options-button2">Rename</button>
        </div>
        )}

    </article>

    </div>
  );
}

export default QueueCard;