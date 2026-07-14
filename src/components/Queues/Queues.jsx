import { useState } from "react";
import "./Queues.css";
import Modal from "../Modal/Modal";
import QueuesForm from "../Forms/QueuesForm";
import QueueCard from "./QueueCard";

function Queues({ modalActive, setModalActive }) {
  const [queues, setQueues] = useState([]);

  const addQueue = (title) => {
  const newQueue = {
    id: crypto.randomUUID(),
    title,
    items: [],
    createdAt: Date.now(),
    color: "#4CAF50",
  };

  setQueues((prevQueues) => [...prevQueues, newQueue]);
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
        onClick={() => setModalActive("queuesform")}
        className="queues__add-button"
      >
        +
      </button>
            {/* {modalActive === "queuesform" && <Modal addQueue={addQueue} />} */}


      <div className="queues__grid">

        {queues.map((queue) => (
          <QueueCard
            key={queue.id}
            queue={queue}
            onClick={() => handleQueueClick(queue.id)}
          />
        ))}

      </div>

    </section>
  );
}

export default Queues;