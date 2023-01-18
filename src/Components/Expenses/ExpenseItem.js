import React, {useState} from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css'



const ExpenseItem = (props) => {

    //This statement gets called 4 times on launch(4 Expense Items )
    //This statement will get called once when one title gets changed as well
    const [title,setTitle] = useState(props.title);


    const clickHandler = () => {
        //call the setTitle method because we want to work with the memory
        setTitle("updated");
        console.log(title);
        //title = "Updated!";
    };

    //document.getElementById('root').addEventListener

    //Only 1 root element 
    return (
        //For CSS
        //When you use props.whatever, the data becomes static
    <Card class = "expense-item"> 
        <div class = "expense-item__description"> 
            <ExpenseDate date = {props.date}/>
            <h2> {title} </h2> 
            <div class = "expense-item__price"> {props.amount}</div>
            <button onClick = {clickHandler}> Change Title</button>
        </div>
    </Card>
    );
}

export default ExpenseItem;