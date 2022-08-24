import "./Expenses.css";
import { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
const Expenses = (props) => {
  const [userSelectedVal, setSelectedVal] = useState("2022");

  const onSelectHandler = (selectedVal) => {
    setSelectedVal(selectedVal);
  };

  return (
    <div className="expenses">
      <ExpensesFilter
        selected={userSelectedVal}
        onSelectValue={onSelectHandler}
      ></ExpensesFilter>

      <ExpensesList
        yearSelected={userSelectedVal}
        expenseArr={props.expenseAraay}
      ></ExpensesList>

      {/* <ExpenseItem
        title={props.expenseAraay[0].title}
        amount={props.expenseAraay[0].amount}
        date={props.expenseAraay[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.expenseAraay[1].title}
        amount={props.expenseAraay[1].amount}
        date={props.expenseAraay[1].date}
      ></ExpenseItem> */}
    </div>
  );
};

export default Expenses;
