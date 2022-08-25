import "./Expenses.css";
import { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExenesesTotal from "./ExpensesTotal";

const Expenses = (props) => {
  const [userSelectedVal, setSelectedVal] = useState("2022");

  const onSelectHandler = (selectedVal) => {
    setSelectedVal(selectedVal);
  };

  //filtering expenses based on user selected year
  const filteredExpenses = props.expenseAraay.filter((expenses) => {
    return userSelectedVal === "default"
      ? expenses
      : userSelectedVal === expenses.date.getFullYear().toString();
  });

  //calculating total based on filtered array
  const totalAmount = filteredExpenses.reduce((acc, amount) => {
    return (acc += Number(amount.amount));
  }, 0);

  return (
    <div className="expenses">
      <ExpensesFilter
        selected={userSelectedVal}
        onSelectValue={onSelectHandler}
      ></ExpensesFilter>

      <ExpensesList expenseArr={filteredExpenses}></ExpensesList>

      <ExenesesTotal totalAmount={totalAmount}></ExenesesTotal>

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
