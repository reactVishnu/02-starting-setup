import './Expenses.css'
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import React, {useState} from "react";
import ExpensesList from "./ExpensesList";
import ExpenseChart from "./ExpenseChart";
function Expenses(props)
{

    const [filteredYear,setFilteredYear] = useState('2019')

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear)
    }

    const filteredExpense = props.item.filter(expense => expense.date.getFullYear().toString() === filteredYear)


    return (
        <div>
            <Card className="expenses">
                <ExpenseFilter
                    selected={filteredYear}
                    onChangeFilter={filterChangeHandler}/>
                <ExpenseChart expenses={filteredExpense} />
                <ExpensesList items={filteredExpense}/>
            </Card>
        </div>)
}

export default Expenses