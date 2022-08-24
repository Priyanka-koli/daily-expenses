import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  const filteredExpenses = props.expenseArr.filter((expenses) => {
    return props.yearSelected === "default"
      ? expenses
      : props.yearSelected === expenses.date.getFullYear().toString();
  });

  return (
    <div className="expenses-list">
      {filteredExpenses.length === 0 ? (
        <p className="expenses-list__fallback">No Expenses Found</p>
      ) : (
        filteredExpenses.map((expenses) => {
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
