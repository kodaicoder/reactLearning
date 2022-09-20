import React, { useState } from "react";
import ExpensesContainer from "./_Components/Expenses/ExpensesContainer/ExpensesContainer";
import NewExpense from "./_Components/Expenses/NewExpense/NewExpense";

//#region expense_data
let INITIAL_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
  {
    id: "e5",
    title: "New Computer",
    amount: 500,
    date: new Date(2021, 6, 25),
  },
  {
    id: "e6",
    title: "New Door",
    amount: 250,
    date: new Date(2021, 9, 5),
  },
];
//#endregion

const App = () => {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

  const addingExpenseHandler = (newExpenseData) => {
    console.log(
      "%cthis new expense is coming from 'NewExpense'.(NewExpense >>> App)",
      "background:rgb(0,0,0); color:rgb(0,255,0)"
    );
    console.log(newExpenseData);
    // expenses = [...expenses, newExpenseData];
    // console.log(expenses);
    setExpenses((prevExpenses) => {
      return [newExpenseData, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense addingExpense={addingExpenseHandler} />
      <ExpensesContainer expenses={expenses} />
    </div>
  );
};

export default App;
