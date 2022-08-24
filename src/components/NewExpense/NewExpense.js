import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const onSaveExpenseHandler = (ExpenseData) => {
    const expenses = {
      ...ExpenseData,
    };
    props.onSaveExpData(expenses);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={onSaveExpenseHandler} />
    </div>
  );
};
export default NewExpense;
