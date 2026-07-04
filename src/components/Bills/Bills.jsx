import "./Bills.css";

function Bills({ setModalActive }) {



  return(
    <div className="bills">
      <button onClick={() => {setModalActive(true)}} type="button" className="bills__add">+</button>

    </div>
  )
}

export default Bills;