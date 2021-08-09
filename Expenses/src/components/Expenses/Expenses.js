import { useState } from 'react'

import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

import './Expenses.css';

function Expenses(props){
    const [filteredYear, setFilterYear] = useState('2021');

    const filterChangeHandler = (selectedYear) => {
        setFilterYear(selectedYear);
    };
    
    const filteredExpenses = props.items.filter(expense => {
        return (expense.date.getFullYear().toString() === filteredYear);
    });

    

    return (
        <Card className="expenses">
            <ExpensesFilter 
                selected={filteredYear} 
                onChangeFilter={filterChangeHandler}
            />
            <ExpensesChart expenses={filteredExpenses}/>
            <ExpensesList items={filteredExpenses}/>
        </Card>
    );
}

export default Expenses;