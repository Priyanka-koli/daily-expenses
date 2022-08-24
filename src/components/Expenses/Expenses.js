import "./Expenses.css";
import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [userSelectedVal, setSelectedVal] = useState("2022");

  const onSelectHandler = (selectedVal) => {
    setSelectedVal(selectedVal);
  };
  console.log(props.expenseAraay[0].title);
  return (
    <div className="expenses">
      <ExpensesFilter
        selected={userSelectedVal}
        onSelectValue={onSelectHandler}
      ></ExpensesFilter>
      {props.expenseAraay.map((expenses) => {
        return (
          <ExpenseItem
            key={expenses.id}
            title={expenses.title}
            amount={expenses.amount}
            date={expenses.date}
          ></ExpenseItem>
        );
      })}
      ;
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
