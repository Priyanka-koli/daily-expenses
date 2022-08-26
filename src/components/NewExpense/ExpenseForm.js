import { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  const [enteredTitle, setTitle] = useState("");
  const [enteredAmount, setAmount] = useState("");
  const [enteredDate, setDate] = useState("");
  const [isEnteredTitle, setIsEnteredTitle] = useState(true);
  const [isEnteredAmount, setIsEnteredAmount] = useState(true);
  const [isEnteredDate, setIsEnteredDate] = useState(true);

  const titleChangeHandler = (e) => {
    if (e.target.value.trim()) {
      setIsEnteredTitle(true);
    }
    setTitle(e.target.value);
  };
  const amountChangeHandler = (e) => {
    setAmount(e.target.value);
    setIsEnteredAmount(true);
  };
  const dateChangeHandler = (e) => {
    setDate(e.target.value);
    setIsEnteredDate(true);
  };
  const submitHandler = (e) => {
    e.preventDefault();

    enteredTitle.trim().length === 0 && setIsEnteredTitle(false);
    enteredAmount.trim().length === 0 && setIsEnteredAmount(false);
    enteredDate.trim().length === 0 && setIsEnteredDate(false);

    if (
      enteredTitle.trim().length === 0 ||
      enteredAmount.trim().length === 0 ||
      enteredDate.trim().length === 0
    ) {
      return;
    }

    const ExpenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
      id: Math.random().toString(),
    };
    props.onSaveExpenseData(ExpenseData);
    setTitle("");
    setAmount("");
    setDate("");
  };

  const cancelClickHandler = () => {
    props.onCancel(false);
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
            className={`${!isEnteredTitle ? "invalid" : ""}`}
          />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={enteredAmount}
            onChange={amountChangeHandler}
            min="0.1"
            step="0.01"
            className={`${!isEnteredAmount ? "invalid" : ""}`}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={enteredDate}
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
            className={`${!isEnteredDate ? "invalid" : ""}`}
          />
        </div>

        <div className="new-expense__actions">
          <button onClick={cancelClickHandler}>Cancel</button>
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </div>
      {(!isEnteredAmount || !isEnteredDate || !isEnteredTitle) && (
        <div className="form-error">
          <p className="validation-error"> Please enter all values!!!</p>
        </div>
      )}
    </form>
  );
};
export default ExpenseForm;
