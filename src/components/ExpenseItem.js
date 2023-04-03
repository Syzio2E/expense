import React, {useState} from 'react';

import './ExpenseItem.css';
import Expensedate from './ExpenseDate';
import ExpenseDetail from './ExpenseDetail';
import ExpenseAmount from './ExpenseAmount';

const ExpenseItem =(props) => {

  const [title, setTitle] = useState(props.title) 
  

  const clickHandler = () =>{
    setTitle('Updated');
  }

  

  return (
    
    <div className="expense-item">
      <Expensedate date={props.date}/>
      <div className="expense-item__description">
        <h2>{title}</h2>
      <ExpenseDetail  location={props.location}  />
      </div>
      <ExpenseAmount amount={props.amount}/>
      
      <button onClick={clickHandler}>Change Title</button>
      
      
      </div>
  );
}

export default ExpenseItem;
