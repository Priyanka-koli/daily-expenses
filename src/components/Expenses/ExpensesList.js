import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  return (
    <div className="expenses-list">
      {props.expenseArr.length === 0 ? (
        <p className="expenses-list__fallback">No Expenses Found</p>
      ) : (
        props.expenseArr.map((expenses) => {
          return (
            <ExpenseItem
              key={expenses.id}
              title={expenses.title}
              amount={expenses.amount}
              date={expenses.date}
            ></ExpenseItem>
          );
        })
      )}
    </div>
  );
};

export default ExpensesList;
