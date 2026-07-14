import "./Queues.css"

function QueueCard({ queue, onClick }) {
  return (
    <article
      className="queuecard__container"
      onClick={onClick}
    >

      <h3 className="queuecard__title">{queue.title}</h3>

      <button className="queuecard__options">
        •••
      </button>

    </article>
  );
}

export default QueueCard;