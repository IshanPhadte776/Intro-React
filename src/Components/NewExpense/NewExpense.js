import React from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css'

const NewExpense = () => {

    // const saveExpenseDataHandler = (enteredExpenseData) => {
    // const expenseData = {
    //     ...enteredExpenseData,
    //     id: Math.random().toString()
    // };
    //     console.log(expenseData);
    // }

    //<ExpenseForm onSaveExpenseData = {saveExpenseDataHandler}/>


    return (
    <div className='new-expense'>
        <ExpenseForm /> 
    </div>
    );
};

export default NewExpense