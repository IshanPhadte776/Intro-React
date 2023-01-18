//import logo from './logo.svg';
import './App.css';
import Expenses from './Components/Expenses/Expenses';
import NewExpense from './Components/NewExpense/NewExpense';
import React from 'react';

//App is one component
//Optional Syntax with the arrow 
const App = () => {

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2',{},"Lets get started"),
  //   React.createElement(Expenses, { items: expenses })
  // );
  //        <Expenses items = {expenses} />

  
  return (
    <div>

        <NewExpense> </NewExpense>
        <Expenses> </Expenses>
    </div>
  );
}

export default App;
