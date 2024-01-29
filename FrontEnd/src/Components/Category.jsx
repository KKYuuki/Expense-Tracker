import axios from 'axios'
import React, { useEffect, useState } from 'react'
import fblogo from "../assets/fblogo.png";
import linkedlogo from "../assets/linkedlogo.png";
import iglogo from "../assets/iglogo.png";

const Category = () => {

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
    return (
        <div className='homeeeeee'>

            <div className="dashbMainBody">

                <div className="RecLog">
                    <h3>History</h3>
                </div>
                <div className="containerRow">
                    <div class="firstRow">
                        <div class="expense-box food-drinks">
                            <span>Food & Drinks</span>
                            <span>₱45.00</span>
                        </div>
                    </div>
                    <div class="secRow">
                        <div class="expense-box utilities">
                            <span>Utilities</span>
                            <span>₱80.50</span>
                        </div>
                    </div>
                    <div class="thirdRow">
                        <div class="expense-box added-funds">
                            <span>Added Funds</span>
                            <span>₱120.25</span>
                        </div>
                    </div>
                    <div class="frthRow">
                        <div class="expense-box travel">
                            <span>Travel</span>
                            <span>₱200.00</span>
                        </div>
                    </div>


                </div>
            </div>
            <div className="footerr">
                <div className="footerNote">
                    <h3>Note</h3>
                </div>

            </div>
        </div>
    )
}

export default Category