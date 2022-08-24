import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  /* const expenseDate = new Date(2021, 2, 28);
  const expenseTitle = "Car Insurance";
  const expenseAmount = "$294.67"; */
  /* const [title, setTitle] = useState(props.title);
  const clickHandler = () => {
    setTitle("Hello");
  };
  console.log(title); */
  return (
    <div className="expense-item">
      <ExpenseDate data={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      {/* <button onClick={clickHandler}>Change title</button> */}
    </div>
  );
};

export default ExpenseItem;
