import { Link } from "react-router-dom";
import "./Main.css";
import Calendar from "../Calendar/Calendar";

function Main() {
  return(
    <div className="main">
      <div className="main__layout">
        <div className="main__panel">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/calendar">Calendar</Link>
        <Link to="/groceries">Groceries</Link>
        <Link to="/bills">Bills</Link>
        <Link to="/tasks">Tasks</Link>
        <Link to="/notes">Notes</Link>
        </div>
      <div className="main__displayed">
      <Calendar />
      </div>
      </div>
    </div>
  )
}

export default Main;
