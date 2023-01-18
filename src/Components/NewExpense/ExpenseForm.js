import React, {useState} from 'react';
import './ExpenseForm.css';

//min = min amount
//step, how to increment
//For the input, you can add the "onChange Portion", whenever the text is changed, the onChange Variable is called 
//value property represents what was typed in from the user

const ExpenseForm = () => {

    //If you want to work with 
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    //All three portions are interconnected and you need to update all 3 states at the same time
    // const[userInput, setUserInput] = useState ({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // });


    //By passing the event parameter, the local event variable is used, not the global one
    //Other values are blown away by default, but ...userinput fixs this problem 
    const titleChangeHandler = (event) => {
        //Version 1 
        setEnteredTitle(event.target.value);
        //Version 2
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value,
        // })

        //Version 3
        // setUserInput((prevState) => {
        //    return {...prevState, enteredTitle: event.target.value};  
        // });
    };

    const amountChangeHandler = (event) => {

        setEnteredAmount(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value,
        // })
    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value,
        // })
    };

    const submitHandler = (event) => {
        //Cancels the event if possible
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };

        console.log(expenseData);
        //props.onSaveExpenseData(expenseData)
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');

    };


    return <form onSubmit = {submitHandler}>
        <div className= "new-expense__controls"> 
            <div className="new-expense__control"> 
                <label> Title</label>
                <input type = 'text' value = {enteredTitle} onChange = {event => titleChangeHandler(event)}/>
            </div>

            <div className="new-expense__control"> 
                <label> Amount</label>
                <input type = 'number' value = {enteredAmount} onChange = {event => amountChangeHandler(event)} min = "0.01" step = "0.01"/>
            </div>

            <div className="new-expense__control"> 
                <label> Date</label>
                <input type = 'date' value = {enteredDate} onChange = {event => dateChangeHandler(event)} min = "2020-01-01" step = "2023-12-31"/>
            </div>
        </div>

        <div className= 'new-expense__actions'> 
            <button type = 'submit'> Add Expense </button>
        </div>
    </form>
};

export default ExpenseForm