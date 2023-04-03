import "./ExpenseDetail.css";

const ExpenseDetail = (props) => {
  return (
    <div>
        <h2>{props.title}</h2>
        <div>
        <h2>{props.location}</h2>
        </div>
    </div>
  );
}

export default ExpenseDetail;
