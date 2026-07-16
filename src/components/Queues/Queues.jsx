import { useState } from "react";
import "./Queues.css";
import Modal from "../Modal/Modal";
import QueuesForm from "../Forms/QueuesForm";
import QueueCard from "./QueueCard";
import QueueCardForm from "../Forms/QueueCardForm";

function Queues({ modalActive, setModalActive, closeModal }) {
  const [queues, setQueues] = useState([]);
  const [theQueueExists, setTheQueueExists] = useState(false);
  const [selectedQueue, setSelectedQueue] = useState(null);

  const addDisabled = () => {
    if(theQueueExists) {
      return;
    }
    setModalActive("queuesform");
  };

const addQueue = (title) => {
  const trimmedTitle = title.trim();

  const queueExists = queues.some(
    (queue) =>
      queue.title.toLowerCase() === trimmedTitle.toLowerCase()
  );

    if(queueExists) {
      setTheQueueExists(true);
      setSelectedQueue(title);
      return;
    }

  const newQueue = {
    id: crypto.randomUUID(),
    title: trimmedTitle,
    items: [],
    createdAt: Date.now(),
    color: "#4CAF50",
  };

  setQueues((prevQueues) => [...prevQueues, newQueue]);
};

  const deleteQueue = (id) => {
    setQueues((prevItems) => prevItems.filter((item) => item.id !== id));
  }

  const openRenameModal = (queue, evt) => {
    evt.stopPropagation();
    setModalActive("queuecardform");
    setSelectedQueue(queue);
  };

  const renameQueue = (id, newTitle) => {
    const trimmedTitle = newTitle.trim();

  // Prevent duplicate names
  const queueExists = queues.some(
    (queue) =>
      queue.id !== id &&
      queue.title.toLowerCase() === trimmedTitle.toLowerCase()
  );

  if(queueExists) {
      setTheQueueExists(true);
      setSelectedQueue(newTitle);
      return;
    }

  setQueues((prevQueues) =>
    prevQueues.map((queue) =>
      queue.id === id
        ? { ...queue, title: trimmedTitle }
        : queue
    )
  );

  return true;
};

  const [selectedQueueId, setSelectedQueueId] = useState(null);

  const handleQueueClick = (id) => {
    setSelectedQueueId(id);
  };

  const handleBack = () => {
    setSelectedQueueId(null);
  };

  if (selectedQueueId) {
    return (
      <div className="queues">
        <button
          className="queues__back-button"
          onClick={handleBack}
        >
          ← Back
        </button>

        <h2>Queue Details Coming Soon</h2>
      </div>
    );
  }

  return (
    <section className="queues">

      <button
        onClick={addDisabled}
        className={theQueueExists ? "queues__add-button_disabled" : "queues__add-button"}
      >
        +
      </button>
            {modalActive === "queuesform" && <Modal closeModal={closeModal}><QueuesForm addQueue={addQueue} setModalActive={setModalActive} /></Modal>}

      {theQueueExists && (<div className="queues__repeat-container">
        <p className="queues__repeat-text">A queue named "{selectedQueue}", already exists</p>
        <button onClick={() => setTheQueueExists(false)} type="button" className="queues__repeat-button">OK</button>
      </div>)}

      <div className="queues__grid">

        {queues.map((queue) => (
          <QueueCard
            key={queue.id}
            queue={queue}
            onClick={() => handleQueueClick(queue.id)}
            deleteQueue={deleteQueue}
            setModalActive={setModalActive}
            closeModal={closeModal}
            modalActive={modalActive}
            openRenameModal={openRenameModal}
          />
        ))}

      {modalActive === "queuecardform" && <Modal closeModal={closeModal}><QueueCardForm selectedQueue={selectedQueue} renameQueue={renameQueue} closeModal={closeModal} /></Modal>}


      </div>

    </section>
  );
}

export default Queues;