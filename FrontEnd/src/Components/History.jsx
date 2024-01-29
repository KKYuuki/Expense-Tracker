import axios from 'axios'
import React, { useEffect, useState } from 'react'


const History = () => {

    const [category, setCategory] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3000/auth/category')
            .then(result => {
                if (result.data.Status) {
                    setCategory(result.data.Result);
                } else {
                    alert(result.data.Error)
                }
            }).catch(err => console.log(err))
    }, [])

    const filterPreviousMonth = (transactions) => {
        const currentDate = new Date();
        const lastMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1);
        return transactions.filter(transaction => {
            const transactionDate = new Date(transaction.date);
            return transactionDate >= lastMonth && transactionDate < currentDate;
        });
    };
    //   const filteredTransactions = filterPreviousMonth(transactions);
    return (
        <div className='homeeeeee'>
            <div className="dashbMainBody">
                <div className="RecLog">
                    <h3>History - {new Date().toLocaleString('default', { month: 'long' })} {new Date().getFullYear()}</h3>
                </div>
                <div className="wholeTablee">
                    <div className="headerRow">
                        <table className="table rounded-3">
                            <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>Description</th>
                                    <th>Amount</th>
                                </tr>
                            </thead>

                            <tbody>
                                 {/* {filteredTransactions.map((transaction, index) => (
                                    <tr key={index}>
                                    <td>{transaction.date}</td>
                                    <td>{transaction.description}</td>
                                    <td>₱{transaction.amount.toFixed(2)}</td>
                                </tr>
                                ))} */}
                            </tbody>

                        </table>
                    </div>
                    </div>
            </div>
            <div className="footerr">
                <div className="footerNote">
                    {category.map((cat, index) => (
                        <p key={index}>
                            Note: You have been spending {calculatePercentageIncrease(cat)}% more on {cat} over the past month.
                        </p>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default History