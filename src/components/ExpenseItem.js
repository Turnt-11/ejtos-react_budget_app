import React, { useContext } from 'react';
import { TiMinus, TiPlus, TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch,currency } = useContext(AppContext);
    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };
    const handleSubtractExpense = () => {

        dispatch({
            type: 'SUBTRACT_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }

    return (
        <tr>
        <td>{props.name}</td>
        <td>{currency}{props.cost}</td>
        <td><TiPlus style={{ backgroundColor:'green',borderRadius:'50%',width:'2rem',height:'2rem'}} onClick={event=> increaseAllocation(props.name)} >+</TiPlus></td>
        <td><TiMinus size='1.5em'  style={{ backgroundColor:'red',borderRadius:'50%',width:'2rem',height:'2rem'}} onClick={handleSubtractExpense}></TiMinus></td>
        <td><TiDelete size='1.5em'  style={{ backgroundColor:'red',borderRadius:'50%',width:'2rem',height:'2rem'}} onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;