import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ExpenseListByType = ({expenseCategory}) => {
    const[expense, setExpense] = useState([])
    const[loading, setLoading] = useState([true])
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`localhost:5173/${expenseCategory}`) // localhost:5173 may not be the correct API link. Change it if it is wrong.
                setExpense(response.data)
                setLoading(false)
            } catch {
                console.error('Error fetching data: ', error);
            }
        }

        fetchData()
    }, [category])

    return (
        <div>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <ul>
                    {expense.map(item => (
                        <li key={item.expenseID}>{item.description}</li>
                        // Modify this if necessary
                    ))}
                </ul>
            )}
        </div>
    )
}

export default ExpenseListByType
