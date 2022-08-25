import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

let DUMMY_EXPENSES = [
  {
    id: "el1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 2, 12),
  },
  {
    id: "el2",
    title: "New Tv",
    amount: 794.12,
    date: new Date(2022, 2, 13),
  },
  {
    id: "el3",
    title: "Car Insurance",
    amount: 294.12,
    date: new Date(2022, 2, 13),
  },
  {
    id: "el4",
    title: "New Desk",
    amount: 450,
    date: new Date(2022, 5, 13),
  },
];

const App = () => {
  const [expense, setExpense] = useState(DUMMY_EXPENSES);

  const onSaveExpHandler = (expensesData) => {
    //let finalExpense = [expensesData, ...DUMMY_EXPENSES];
    //setExpense(finalExpense);

    setExpense((prevState) => {
      return [expensesData, ...DUMMY_EXPENSES];
    });
  };

  return (
    <div>
      <NewExpense onSaveExpData={onSaveExpHandler} />
      <Expenses expenseAraay={expense} />
    </div>
  );
};

export default App;
