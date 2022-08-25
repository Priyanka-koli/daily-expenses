import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEditting, setIsEditting] = useState(false);

  const onSaveExpenseHandler = (ExpenseData) => {
    const expenses = {
      ...ExpenseData,
    };
    props.onSaveExpData(expenses);
    setIsEditting(false);
  };

  const addExpensesHandler = () => {
    setIsEditting(true);
  };

  const cancelClickHandler = (val) => {
    setIsEditting(val);
  };

  return (
    <div className="new-expense">
      {!isEditting && (
        <button onClick={addExpensesHandler}>Add Expenses</button>
      )}
      {isEditting && (
        <ExpenseForm
          onCancel={cancelClickHandler}
          onSaveExpenseData={onSaveExpenseHandler}
        />
      )}
    </div>
  );
};
export default NewExpense;
