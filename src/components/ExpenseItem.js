import './ExpenseItem.css';
import Expensedate from './ExpenseDate';
import ExpenseDetail from './ExpenseDetail';
import ExpenseAmount from './ExpenseAmount';

const ExpenseItem =(props) => {

  return (
    
    <div className="expense-item">
      <Expensedate date={props.date}/>
      <div className="expense-item__description">
      <ExpenseDetail  location={props.location} title={props.title} />
      </div>
      <ExpenseAmount amount={props.amount}/>
      </div>
  );
}

export default ExpenseItem;
