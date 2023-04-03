import React, {useState} from "react";

const ExpenseAmount = (props)=>{
    const [amount, setAmount] = useState(props.amount)

    const changeHandler = () =>{
        setAmount('100');
      }

return (
    <div>
    <div className="expense-item__price" >{amount}</div>
    <button onClick={changeHandler}>update expense</button>
    </div>
)
}

export default ExpenseAmount;