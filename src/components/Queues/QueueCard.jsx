import { useState } from "react";
import "./Queues.css"

function QueueCard({ queue, onClick }) {
  const [optionsClicked, setOptionsClicked] = useState(false);

  const showOptions = (evt) => {
    evt.stopPropagation();
    setOptionsClicked(!optionsClicked);
  };

  return (
    <article
      className="queuecard__container"
      onClick={onClick}
    >

      <h3 className="queuecard__title">{queue.title}</h3>

      <button onClick={showOptions} type="button" className="queuecard__options">
        •••
      </button>

      {optionsClicked && (<div className="queuecard__options-container">
          <button className="queuecard__options-button1">Delete</button>
          <button className="queuecard__options-button2">Rename</button>
        </div>
        )}

    </article>
  );
}

export default QueueCard;