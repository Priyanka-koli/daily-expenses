import "./Expenses.css";
import { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExenesesTotal from "./ExpensesTotal";
import Chart from "../Chart/Chart";
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
      <Chart expenseMonthArr={filteredExpenses}></Chart>
      <ExpensesList expenseArr={filteredExpenses}></ExpensesList>

      <ExenesesTotal totalAmount={totalAmount}></ExenesesTotal>
    </div>
  );
};

export default Expenses;
