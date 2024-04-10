import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget,expenses,dispatch,currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);
    
    const updateBudget = (event) => {
        const updatedBudget = Number(event.target.value);
        if(totalExpenses < newBudget) {
        setNewBudget(updatedBudget);
        dispatch({
            type: 'SET_BUDGET',
            payload: updatedBudget
        });
    } else {
       alert("You can't reduce the budget value lower than the amount already spent.");
    }
    };

    return (
<div className='alert alert-primary'>
<span>Budget: {currency}
        </span>
<input type="number" step="10" value={newBudget} onChange={updateBudget}></input>

</div>
    );
};
export default Budget;