import './Card.css'
// import ExpenseDate from "../Expenses/ExpenseDate";
function Card(props)
{
    const classes = 'card ' + props.className;
    return <div className={classes}>{props.children}</div>
}

export default Card



// prop.children =  <ExpenseDate date={props.date}/>
//             <div className="expense-item__description">
//                 <h2>{props.title}</h2>
//                 <div className="expense-item__price">${props.amount}</div>
//             </div>

