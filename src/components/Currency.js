import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const CurrencySelector = () => {
    const { dispatch } = useContext(AppContext);

    const changeCurrency = (newCurrency) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: newCurrency,
        });
    };

    return (
        <div className="btn btn-success">
            
                <label>Currency</label>
            
            <select className="btn btn-success" style={{textAlign: 'left'}} onChange={(event) => changeCurrency(event.target.value)}>
                <option value="£">£ Pound</option>
                <option value="$">$ Dollar</option>
                <option value="€">€ Euro</option>
                <option value="₹">₹ Ruppee</option>
            </select>
        </div>
    );
};
export default CurrencySelector;