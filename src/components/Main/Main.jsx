import { Link, useLocation } from "react-router-dom";
import "./Main.css";
import Calendar from "../Calendar/Calendar";
import Bills from "../Bills/Bills";
import Grocery from "../Grocery/Grocery";

function Main({ modalActive, setModalActive }) {
  const location = useLocation();

  return (
    <div className="main">
      <div className="main__layout">
        <div className="main__panel">
          <Link className="main__panel-link" to="/dashboard">Dashboard</Link>
          <Link className="main__panel-link" to="/calendar">Calendar</Link>
          <Link className="main__panel-link" to="/groceries">Groceries</Link>
          <Link className="main__panel-link" to="/bills">Bills</Link>
          <Link className="main__panel-link" to="/tasks">Tasks</Link>
          <Link className="main__panel-link" to="/notes">Notes</Link>
          <Link className="main__panel-link" to="/settings">Settings</Link>

        </div>
        <div className="main__displayed">
          {location.pathname === "/calendar" && (<Calendar />)}
          {location.pathname === "/bills" && (<Bills modalActive={modalActive} setModalActive={setModalActive} />)}
          {location.pathname === "/groceries" && (<Grocery modalActive={modalActive} setModalActive={setModalActive} />)}
        </div>
      </div>
    </div>
  );
}

export default Main;
