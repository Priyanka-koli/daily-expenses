import "./ExpensesTotal.css";
const ExenesesTotal = (props) => {
  return (
    <div>
      {props.totalAmount > 0 && (
        <div>
          <p className="expenses-total"> Total Amount Spent</p>
          <h3 className="expenses-total">{props.totalAmount.toFixed(2)}</h3>
        </div>
      )}
      ;
    </div>
  );
};

export default ExenesesTotal;
