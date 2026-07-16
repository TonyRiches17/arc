import "./Bills.css";

function BillCard({ bill }) {
  return(
    <div className="billcard">
      <div className="billcard__image-container">
        <img src="" alt="Picture of Company Logo" className="bills__card-image" />
        </div>
      <div className="billcard__info-container">
      <p className="billcard__text">Company Name: {bill.company}</p>
      <p className="billcard__text">Type of Bill: {bill.billtype}</p>
      <p className="billcard__text">Due How Often: {bill.billcycle}</p>
      <p className="billcard__text">Due Date: {bill.billdue}</p>
      <p className="billcard__text">Amount Due: ${bill.billamount}</p>
      <p className="billcard__text">Autopay: {bill.autopay === true ? "Yes" : "No"}</p>
      </div>
    </div>
  )
}

export default BillCard;