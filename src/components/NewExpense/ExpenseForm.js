import { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  const [enteredTitle, setTitle] = useState("");
  const [enteredAmount, setAmount] = useState("");
  const [enteredDate, setDate] = useState("");

  /*  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  }); */

  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
    //setUserInput({ ...userInput, enteredtitle: e.target.value });
    /*     setUserInput((prevState) => {
      console.log(prevState);
      console.log(...prevState);
      return { ...prevState, enteredTitle: e.target.value };
    }); */
  };
  const amountChangeHandler = (e) => {
    setAmount(e.target.value);
    /* setUserInput({ ...userInput, enteredAmount: e.target.value }); */
  };
  const dateChangeHandler = (e) => {
    setDate(e.target.value);
    /* setUserInput({ ...userInput, enteredDate: e.target.value }); */
  };
  const submitHandler = (e) => {
    e.preventDefault();

    const ExpenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
      id: Math.random().toString(),
    };
    props.onSaveExpenseData(ExpenseData);
    console.log(ExpenseData);
    setTitle("");
    setAmount("");
    setDate("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>
            Title
            <input
              type="text"
              value={enteredTitle}
              onChange={titleChangeHandler}
            />
          </label>
        </div>

        <div className="new-expense__control">
          <label>
            Amount
            <input
              type="number"
              value={enteredAmount}
              onChange={amountChangeHandler}
              min="0.1"
              step="0.01"
            />
          </label>
        </div>
        <div className="new-expense__control">
          <label>
            Date
            <input
              type="date"
              value={enteredDate}
              min="2019-01-01"
              max="2022-12-31"
              onChange={dateChangeHandler}
            />
          </label>
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};
export default ExpenseForm;