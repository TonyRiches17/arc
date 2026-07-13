import { useState } from "react";
import "./Queues.css";

import QueueCard from "./QueueCard";

function Queues() {
  const [queues, setQueues] = useState([
    {
      id: crypto.randomUUID(),
      title: "Restaurants",
      items: [],
    },
    {
      id: crypto.randomUUID(),
      title: "Music",
      items: [],
    },
  ]);

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
          className="queues__back-btn"
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
        className="queues__add-btn"
      >
        +
      </button>

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